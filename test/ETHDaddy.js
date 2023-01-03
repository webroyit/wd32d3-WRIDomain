const { expect } = require("chai");
 
const tokens = (n) => {
  return ethers.utils.parseUnits(n.toString(), 'ether')
}

describe("ETHDaddy", () => {
  let ethDaddy;
  let deployer, owner1;
  
  const NAME = 'WRI Domain';
  const SYMBOL = 'WRID';

  beforeEach(async () => {
    // Get all the addresses from hardhat environment
    // It return the result as an array
    [deployer, owner1] = await ethers.getSigners();

    // Deploy contract
    const ETHDaddy = await ethers.getContractFactory('ETHDaddy')
    ethDaddy = await ETHDaddy.deploy('WRI Domain', 'WRID')

    // List a domain
    const transaction = await ethDaddy.connect(deployer).list("Web3.eth", tokens(10))
    await transaction.wait()
  })

  describe("Deployment", () => {
    it('has a name', async () => {
      const result = await ethDaddy.name()
      expect(result).to.equal(NAME)
    })
  
    it('has a symbol', async () => {
      const result = await ethDaddy.symbol()
      expect(result).to.equal(SYMBOL)
    })

    it('Sets the owner', async () => {
      const result = await ethDaddy.owner()
      expect(result).to.equal(deployer.address)
    })

    it('Returns the max supply', async () => {
      const result = await ethDaddy.maxSupply()
      expect(result).to.equal(1)
    })
     
  })

  describe("Domain", () => {
    it('Returns domain values', async () => {
      let domain = await ethDaddy.getDomain(1)
      expect(domain.name).to.equal("Web3.eth")
      expect(domain.cost).to.equal(tokens(10))
      expect(domain.isOwned).to.equal(false)
    })
  })

})

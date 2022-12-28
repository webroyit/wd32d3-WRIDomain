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
  })

})

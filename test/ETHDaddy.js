const { expect } = require("chai")
 
const tokens = (n) => {
  return ethers.utils.parseUnits(n.toString(), 'ether')
}

describe("ETHDaddy", () => {
  let ethDaddy;
  
  const NAME = 'WRI Domain';
  const SYMBOL = 'WRID';

  beforeEach(async () => {
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
  })

})

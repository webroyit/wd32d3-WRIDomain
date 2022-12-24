const { expect } = require("chai")
 
const tokens = (n) => {
  return ethers.utils.parseUnits(n.toString(), 'ether')
}

describe("ETHDaddy", () => {
  
  it('has a name', async () => {
    // Deploy contract
    const ETHDaddy = await ethers.getContractFactory('ETHDaddy')
    let ethDaddy = await ETHDaddy.deploy()

    const result = await ethDaddy.name()
    expect(result).to.equal('WRI Domain')
  })
})

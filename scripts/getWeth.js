const { getNamedAccounts, ethers } = require("hardhat");

const AMOUNT = ethers.utils.parseEther("0.2")
const wethTokenAddress = "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"
async function getWeth(){
    const {deployer} = await getNamedAccounts()
    // call the deposit function on weth contract
    // contract address
    // 0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2
    const iWeth = await ethers.getContractAt("IWeth",
       wethTokenAddress,
       deployer
    )
    const tx = await iWeth.deposit({ value: AMOUNT })
    await tx.wait(1)
    const wethBalance = await iWeth.balanceOf(deployer)
    console.log(`Got ${wethBalance.toString()} WETH`)

}

module.exports = { getWeth, AMOUNT, wethTokenAddress}
const hre = require("hardhat")

async function main() {
  const NAME = "Rushmore Token"
  const SYMBOL = "RUSH"
  const MAX_SUPPLY = "1000000"
  const PRICE = hre.ethers.utils.parseUnits("0.025", "ether")

  const Token = await hre.ethers.getContractFactory("Token")

  const token = await Token.deploy(NAME, SYMBOL, MAX_SUPPLY)

  await token.deployed()
  console.log(`Token deployed here ---> ${token.address}\n`)

  const Crowdsale = await hre.ethers.getContractFactory("Crowdsale")
  const crowdsale = await Crowdsale.deploy(
    token.address,
    PRICE,
    hre.ethers.utils.parseUnits(MAX_SUPPLY, "ether")
  )
  await crowdsale.deployed()
  console.log(`Crowdsale deployed here --> ${crowdsale.address}\n`)

  const transaction = await token.transfer(
    crowdsale.address,
    hre.ethers.utils.parseUnits(MAX_SUPPLY, "ether")
  )
  await transaction.wait()
  console.log(`Tokens transferred to Crowdsale\n`)
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})

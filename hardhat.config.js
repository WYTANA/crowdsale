require("@nomicfoundation/hardhat-toolbox")
require("@nomiclabs/hardhat-etherscan")
require("dotenv").config()
// const privateKeys = process.env.GOERLI_PRIVATE_KEY || ""

module.exports = {
  solidity: "0.8.9",
  networks: {
    // goerli: {
    //   url: `https://eth-goerli.alchemyapi.io/v2/${process.env.ALCHEMY_API_KEY}`,
    //   accounts: [privateKeys.split(",")],
    // },
  },
  // etherscan: {
  //   apiKey: `${process.env.ETHERSCAN_API_KEY}`,
  // },
}

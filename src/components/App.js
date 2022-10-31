import { useEffect, useState } from "react"
import Container from "react-bootstrap/Container"
import { ethers } from "ethers"

import Navigation from "./Navigation.js"
import Info from "./Info.js"
import Loading from "./Loading.js"
import Progress from "./Progress.js"
import Buy from "./Buy.js"

import TOKEN_ABI from "../abis/Token.json"
import CROWDSALE_ABI from "../abis/Crowdsale.json"

import config from "../config.json"

const App = () => {
  const [provider, setProvider] = useState(null)
  const [crowdsale, setCrowdsale] = useState(null)

  const [account, setAccount] = useState(null)
  const [accountBalance, setAccountBalance] = useState(0)

  const [price, setPrice] = useState(0)
  const [maxTokens, setMaxTokens] = useState(0)
  const [tokensSold, setTokensSold] = useState(0)

  const [isLoading, setIsLoading] = useState(true)

  const loadBlockchainData = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    setProvider(provider)

    const token = new ethers.Contract(
      config[31337].token.address,
      TOKEN_ABI,
      provider
    )
    const crowdsale = new ethers.Contract(
      config[31337].crowdsale.address,
      CROWDSALE_ABI,
      provider
    )
    setCrowdsale(crowdsale)

    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    })
    const account = ethers.utils.getAddress(accounts[0])
    setAccount(account)

    const accountBalance = ethers.utils.formatUnits(
      await token.balanceOf(account),
      18
    )
    setAccountBalance(accountBalance)

    const price = ethers.utils.formatUnits(await crowdsale.price(), 18)
    setPrice(price)
    const maxTokens = ethers.utils.formatUnits(await crowdsale.maxTokens(), 18)
    setMaxTokens(maxTokens)
    const tokensSold = ethers.utils.formatUnits(
      await crowdsale.tokensSold(),
      18
    )
    setTokensSold(tokensSold)

    setIsLoading(false)
  }

  useEffect(() => {
    if (isLoading) {
      loadBlockchainData()
    }
  }, [isLoading])

  return (
    <Container>
      <Navigation />
      <h1 className="text-center my-4">
        Initial Coin Offering for the Rushmore (RUSH) Token!
      </h1>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <h4 className="text-center">
            <strong>Opening Price: </strong>
            {price} Goerli ETH
          </h4>
          <Buy
            provider={provider}
            price={price}
            crowdsale={crowdsale}
            setIsLoading={setIsLoading}
          />
          <Progress tokensSold={tokensSold} maxTokens={maxTokens} />
        </>
      )}
      <hr />
      {account && (
        <Info
          account={account}
          accountBalance={accountBalance}
          maxTokens={maxTokens}
        />
      )}
    </Container>
  )
}

export default App

import { useState } from "react"
import { ethers } from "ethers"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Spinner from "react-bootstrap/Spinner"

const Buy = ({ provider, price, crowdsale, setIsLoading }) => {
  const [amount, setAmount] = useState("0")
  const [isWaiting, setIsWaiting] = useState(false)
  const buyHandler = async (e) => {
    e.preventDefault()
    setIsWaiting(true)
    try {
      const signer = await provider.getSigner()
      const value = ethers.utils.parseUnits(
        (amount * price).toString(),
        "ether"
      )
      const formattedAmount = ethers.utils.parseUnits(
        amount.toString(),
        "ether"
      )
      const transaction = await crowdsale
        .connect(signer)
        .buyTokens(formattedAmount, { value: value })
      await transaction.wait()
    } catch (error) {
      window.alert("User rejected or transaction reverted!")
    }
    setIsLoading(true)
  }

  return (
    <Form
      onSubmit={buyHandler}
      style={{ maxWidth: "800px", margin: "50px auto" }}
    >
      <Form.Group as={Row}>
        <Col>
          <Form.Control
            type="number"
            placeholder="How many RUSH tokens do you want to buy?"
            onChange={(e) => setAmount(e.target.value)}
          />
        </Col>
        <Col className="text-center">
          {isWaiting ? (
            <Spinner animation="border" />
          ) : (
            <Button variant="success" type="submit" style={{ width: "100%" }}>
              Buy Tokens!
            </Button>
          )}
        </Col>
      </Form.Group>
    </Form>
  )
}

export default Buy

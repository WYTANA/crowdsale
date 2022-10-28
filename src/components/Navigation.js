import Navbar from "react-bootstrap/Navbar"
import logo from "../logo.png"

const Navigation = () => {
  return (
    <Navbar>
      <img
        alt="logo"
        src={logo}
        width="60"
        height="60"
        className="d-inline-block align-top mx-3"
      />
      <Navbar.Brand href="#" style={{ fontSize: "30px" }}>
        <strong>Rushmore ICO Crowdsale!</strong>
      </Navbar.Brand>
    </Navbar>
  )
}

export default Navigation

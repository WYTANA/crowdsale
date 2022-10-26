import Navbar from "react-bootstrap/Navbar"
import logo from "../logo.png"

const Navigation = () => {
  return (
    <Navbar>
      <img
        alt="logo"
        src={logo}
        width="50"
        height="50"
        className="d-inline-block align-top mx-3"
      />
      <Navbar.Brand href="#">Rushmore ICO Crowdsale!</Navbar.Brand>
    </Navbar>
  )
}

export default Navigation

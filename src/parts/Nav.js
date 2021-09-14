import React from "react"
import { Link } from "gatsby"
import { Navbar, Nav } from "react-bootstrap"

const Navigation = props => (
  <Navbar bg="dark" variant="dark" expand="lg">
    <Link to="/">
      <Navbar.Brand>
        <strong>{props.brand}</strong>
      </Navbar.Brand>
    </Link>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Link className="nav-link" activeClassName="nav-link active" to="/bio">
          Bio
        </Link>
        <Link
          className="nav-link"
          activeClassName="nav-link active"
          to="/project"
        >
          Blog
        </Link>
        <Link
          className="nav-link"
          activeClassName="nav-link active"
          to="/project/privacy-policy"
        >
          Privacy Policy
        </Link>
        <Link
          className="nav-link"
          activeClassName="nav-link active"
          to="/project/disclaimer"
        >
          Disclaimer
        </Link>
        <Link
          className="nav-link"
          activeClassName="nav-link active"
          to="/project/terms-and-conditions"
        >
          Terms and Conditions
        </Link>
        <Link
          className="nav-link"
          activeClassName="nav-link active"
          to="https://hnn.neocities.org"
        >
          Hari AN
        </Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default Navigation

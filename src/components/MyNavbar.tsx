import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import { Link, useLocation } from "react-router-dom"

const MyNavbar = function () {
  const location = useLocation()
  return (
    <Navbar expand="md" className="bg-body-tertiary">
      <Container>
        <Link to="/" className="navbar-brand">
          Space News
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link
              to="/"
              className={
                location.pathname === "/"
                  ? "nav-link fw-bold active"
                  : "nav-link fw-bold "
              }
            >
              Home
            </Link>
            <Link
              to="/favorites"
              className={
                location.pathname === "/favorites"
                  ? "nav-link fw-bold active"
                  : "nav-link fw-bold "
              }
            >
              Favorites
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default MyNavbar

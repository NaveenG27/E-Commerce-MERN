import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Search from "./Search";
import Logo from "../assets/images/logo5.png";
import logo1 from "../assets/images/logonew1.png";

export default function Header({ cartItems = [] }) {
  return (
    <Navbar expand="lg" sticky="top" className="bg-dark navbar-dark py-3 shadow-sm">
      <Container>
        {/* Logo */}
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img
            src={logo1}
            alt="Logo"
            width="70"
            className="me-2 d-inline-block align-top"
          />
          <span className="fw-bold fs-5 text-warning">E-Shopee</span>
        </Navbar.Brand>

        {/* Toggle Button */}
        <Navbar.Toggle aria-controls="main-navbar" />

        {/* Navbar Links */}
        <Navbar.Collapse id="main-navbar" className="justify-content-between">
          {/* Left: Navigation Links */}
          <Nav className="mx-auto my-3 my-lg-0 text-center">
            <Nav.Link as={Link} to="/" className="px-3 text-light fw-semibold">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/arrivals" className="px-3 text-light fw-semibold">
              New Arrivals
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" className="px-3 text-light fw-semibold">
              Contact Us
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className="px-3 text-light fw-semibold">
              About Us
            </Nav.Link>
          </Nav>

          {/* Right: Search + Cart */}
          <div className="d-flex flex-column flex-lg-row align-items-center gap-3">
            <div className="w-100 w-lg-auto">
              <Search />
            </div>

            <Nav.Link
              as={Link}
              to="/cart"
              className="btn btn-warning d-flex align-items-center gap-2 fw-semibold text-dark"
            >
              🛒 Cart
              <span className="badge bg-dark text-warning rounded-pill">
                {cartItems.length}
              </span>
            </Nav.Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

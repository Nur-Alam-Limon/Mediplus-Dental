import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../Context/useAuth";

const NavMenu = () => {
  const { user, logOut } = useAuth();
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      sticky="top"
      bg="light"
      variant="light"
    >
      <Container>
        <Navbar.Brand href="#home" className="fw-bold fs-3">
          <span className="text-primary">Medi</span>Plus
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/home">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About Us
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              Contact Us
            </Nav.Link>
            {user?.email ? (
              <div>
                <button
                  className="btn btn-link"
                  style={{ textDecoration: "none", color: "#0000008C" }}
                  onClick={logOut}
                >
                  LogOut
                </button>

                <Navbar.Text className="text-primary border border-primary px-2 py-1">
                  {user?.displayName ? (
                    <span>{user.displayName}</span>
                  ) : (
                    <span>{user.email}</span>
                  )}
                </Navbar.Text>
              </div>
            ) : (
              <div>
                <Nav.Link as={Link} to="/login">
                  Login/Register
                </Nav.Link>
              </div>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavMenu;

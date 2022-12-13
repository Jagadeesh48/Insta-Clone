import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import Logo from "../assets/logo.png";
import { LinkContainer } from "react-router-bootstrap";

const Navigation = () => {
  return (
    <>
      <Navbar expand="lg" className="border-bottom">
        <Container>
          <Navbar.Brand>
            <img src={Logo} alt="" />
          </Navbar.Brand>
          <Nav className="ms-auto">
            <LinkContainer to={"/newpost"}>
              <Nav.Link className="text-dark">
                <h2>
                  <i className="fas fa-camera"></i>
                </h2>
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;

import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
const NavigationBar = () => {
  const { user,logOut } = useContext(AuthContext);
  const handlelogOut = () =>{
    logOut()
    .then()
    .catch(e=>console.log(e))
  }
  return (
    <Container>
      {/* navbar */}
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="m-auto">
                <Link className="text-decoration-none text-secondary my-auto" to={"/"}>Home</Link>
              <Nav.Link href="#pricing">About</Nav.Link>
              <Nav.Link href="#pricing">Career</Nav.Link>
            </Nav>
            <Nav>
              {user && <FaUserCircle style={{ fontSize: "2rem" }} />}
              {user ? (
                  <Button onClick={handlelogOut} variant="secondary">Logout</Button>
              ) : (
                <Link to="/login">
                  <Button variant="secondary">Login</Button>
                </Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default NavigationBar;

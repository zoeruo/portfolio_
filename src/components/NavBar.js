import { useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { BrowserRouter, Route, Link } from "react-router-dom";
import logo from "../asset/logo.svg";

export const NavBar = () => {
    return (
        <Navbar bg="theme" expand="lg">
            <Container>
                <Navbar.Brand href="#home"><img src={logo} width="36px" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="justify-content-center" id="basic-navbar-nav">
                    <Nav className="me-auto ms-auto">
                        <Link to="/" className="nav-link">ABOUT</Link>
                        <Link to="/" className="nav-link">PROJECTS</Link>
                        <Link to="/RedFlagsOut" className="nav-link">PLAYGROUND</Link>
                        {/* <Nav.Link href="#">PLAYGROUND</Nav.Link> */}

                    </Nav>
                    <Nav className="">
                        <Link to="/" className="nav-link">RESUME</Link>
                    </Nav>
                </Navbar.Collapse>


            </Container>
        </Navbar>
    )
}

export default NavBar;
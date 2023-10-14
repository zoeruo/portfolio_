import { useState } from "react";
import { useEffect, useRef } from 'react';
import { Navbar, Container, Nav } from "react-bootstrap";
import { BrowserRouter, Route, Link } from "react-router-dom";
import logo from "../asset/logo.svg";
import Pdf from '../asset/Resume.pdf';

export const NavBar = () => {
    return (
        <Navbar bg="theme" expand="lg">
            <Container>
                <Navbar.Brand href="#home"><Link to="/" className="nav-link"><img src={logo} width="36px" /></Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="justify-content-center" id="basic-navbar-nav">
                    <Nav className="me-auto ms-auto">
                        {/* <Link to="/" className="nav-link">ABOUT</Link> */}
                        {/* <Link to="/#Project" className="nav-link" onClick={(e) => {
                            document.getElementById("Project").scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" })
                        }}>PROJECTS</Link> */}
                        <a href="/#Project" className="nav-link" >PROJECT</a>
                        <a href="/#Playground" className="nav-link" >PLAYGROUND</a>

                    </Nav>
                    <Nav className="">
                        <a href={Pdf} className="nav-link" target="_blank">RESUME</a>
                    </Nav>
                </Navbar.Collapse>


            </Container>
        </Navbar>
    )
}

export default NavBar;
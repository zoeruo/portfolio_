import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../asset/logo.svg";

export const NavBar = () => {
    return (
        <Navbar bg="theme" expand="lg">
            <Container>
                <Navbar.Brand href="#home"><img src={logo} width="36px" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="justify-content-center" id="basic-navbar-nav">
                    <Nav className="me-auto ms-auto">
                        <Nav.Link href="#">ABOUT</Nav.Link>
                        <Nav.Link href="#">PROJECTS</Nav.Link>
                        <Nav.Link href="#">PLAYGROUND</Nav.Link>

                    </Nav>
                    <Nav className="">
                        <Nav.Link href="#">RESUME</Nav.Link>
                    </Nav>
                </Navbar.Collapse>


            </Container>
        </Navbar>
    )
}
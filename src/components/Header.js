import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import linkedinLogo from '../images/Linkedin-Logo.png'
import githubLogo from '../images/github-logo.png'
// look into different hooks aka useMatch, useResolvedPath, useNavigate to do different things
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="/">Ben West</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">

              <Nav>
                <Nav.Link >
                  <Link className="page-nav" to="/education">Education</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link className="page-nav" to="/projects">Projects</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link className="page-nav" to="/dev">Dev</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link className="page-nav" to="/maps">Maps</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link className="page-nav" to="/leadership">Leadership</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link className="page-nav" to="/articles">Articles</Link>
                </Nav.Link>
              </Nav>

              <Nav className="nav-links" >
                <Nav.Link href="https://www.linkedin.com/in/ben-west98/" target="_blank" rel="noreferrer" text-decoration="none">
                  <Image src={linkedinLogo} width="33%" fluid alt="linkedin" />
                </Nav.Link>
                <Nav.Link href="https://github.com/benwest8" target="_blank" rel="noreferrer" text-decoration="none">
                  <Image src={githubLogo} width="40%" fluid alt="linkedin" />
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
  }
}

export default Header;
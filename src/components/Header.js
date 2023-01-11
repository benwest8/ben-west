import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import linkedinLogo from '../images/Linkedin-Logo.png'
import githubLogo from '../images/github-logo.png'
import Projects from './Projects'
import { Route, Routes } from 'react-router-dom';


class Header extends React.Component {
  render() {
    return (
      <>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#home">Ben West</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            
              <Nav activeKey="/home" onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}>
                <Nav.Item>
                  <Nav.Link href="/projects">Projects</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="/maps">Maps</Nav.Link>
                </Nav.Item>
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
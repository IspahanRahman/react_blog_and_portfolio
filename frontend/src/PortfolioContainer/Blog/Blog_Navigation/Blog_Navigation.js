import React from 'react'
import {Nav,NavDropdown,Navbar,Container} from "react-bootstrap"
import {LinkContainer} from 'react-router-bootstrap'
function Blog_Navigation() {
  return (
    <Navbar bg="light" expand="lg">
  <Container>

    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto">
      <LinkContainer to="/blog">
        <Nav.Link>Home</Nav.Link>
      </LinkContainer>
      <LinkContainer to='/blog/login'>
      <Nav.Link className="btn btn-primary">Login</Nav.Link>
      </LinkContainer>
      
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>


  )
}

export default Blog_Navigation
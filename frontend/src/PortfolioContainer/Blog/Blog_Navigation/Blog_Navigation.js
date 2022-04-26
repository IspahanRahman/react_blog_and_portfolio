import React from 'react'
import { useSelector } from 'react-redux'
import {Nav,NavDropdown,Navbar,Container} from "react-bootstrap"
import {LinkContainer} from 'react-router-bootstrap'
import { Button} from 'react-bootstrap';
function Blog_Navigation() {
  const {user}=useSelector((state)=>state.user)
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
      {user && (
        <NavDropdown title={user.email} id="basic-nav-dropdown">
        <LinkContainer>
        <NavDropdown.Item to="/new-article">New Article</NavDropdown.Item>
        </LinkContainer>
        <LinkContainer>
          <NavDropdown.Item to="/my-articles">My Article</NavDropdown.Item>
        </LinkContainer>
          <NavDropdown.Divider />
          <NavDropdown.Item > <Button variant="outline-danger">Logout</Button></NavDropdown.Item>
        </NavDropdown>
        )}
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>


  )
}

export default Blog_Navigation
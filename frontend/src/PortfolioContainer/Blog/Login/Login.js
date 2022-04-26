import React, { useState } from 'react'
import { Container,Row,Col,Form,Button } from 'react-bootstrap'
import { Link } from "react-router-dom"
import axios from 'axios'
import "./login.css"
import {useLoginUserMutation} from "../../../services/appApi"
function Login() {
  const [email,setEmail]=useState(" ")
  const [password,setPassword]=useState("")
  const [loginUser,{isLoading,data}]=useLoginUserMutation();
  const handleLogin=(e)=>{
    e.preventDefault()
    loginUser({email,password})
    
  }
  if(data){
    console.log(data)
  }
  return (
    <Container>
      <Row>
        <Col md={7} className="d-flex align-items-center justify-content-center">

          <Form className="login_form" onSubmit={handleLogin}>
            <h1 className='text-center'>Login</h1>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e)=>{
      setEmail(e.target.value)
    }} />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" value={password} onChange={(e)=>{
      setPassword(e.target.value)
    }}/>
  </Form.Group>

  <Button variant="primary" type="submit">
    Login
  </Button>
  <div className="py-4 text-center">
    <p>Don't have an account?<Link to="/blog/signup">SignUp</Link>
    </p>
  </div>
</Form>
        </Col>
        <Col md={5} className="login_bg--container">

        </Col>
      </Row>
    </Container>
  )
}

export default Login
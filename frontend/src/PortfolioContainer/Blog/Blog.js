import React from 'react'
import Login from './Login/Login'
import {Routes,Route} from "react-router-dom"
import Blog_Navigation from './Blog_Navigation/Blog_Navigation'
import Blog_Home from './HomePage/Blog_Home'
import Signup from './SignUp/Signup'
function Blog() {
  return (
    <div className="Blog">
      <Blog_Navigation/>
      <Routes>
        <Route path='/' element={<Blog_Home/>} />
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path="/signup" element={<Signup/>}/>
    
        
      </Routes>
  
    </div>
    
  )
}

export default Blog
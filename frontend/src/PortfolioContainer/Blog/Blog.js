import React from 'react'
import Login from './Login/Login'
import {Routes,Route} from "react-router-dom"
import Blog_Navigation from './Blog_Navigation/Blog_Navigation'
import Blog_Home from './HomePage/Blog_Home'
import Signup from './SignUp/Signup'
import NewArticle from './NewArticle/NewArticle'
import EditArticle from './EditArticle/EditArticle'
import {useSelector} from "react-redux"

function Blog() {
  const {user}=useSelector((state)=>state.user)
  return (
    <div className="Blog">
      <Blog_Navigation/>
      <Routes>
        <Route path='/' element={<Blog_Home/>} />
        {!user &&(
          <>
            <Route exact path='/login' element={<Login/>}/>
            <Route exact path="/signup" element={<Signup/>}/>
          </>
        )}
        (user && {
          <>
            <Route path="/new-article" element={<NewArticle/>}/>
            <Route path="/article/:id/edit" element={<EditArticle/>}/>
          </>
        })
    
        
      </Routes>
  
    </div>
    
  )
}

export default Blog
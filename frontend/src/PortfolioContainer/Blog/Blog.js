import React from 'react'
import Login from './Login/Login'
import {Routes,Route} from "react-router-dom"
import Blog_Navigation from './Blog_Navigation/Blog_Navigation'
import Blog_Home from './HomePage/Blog_Home'
import Signup from './SignUp/Signup'
import NewArticle from './NewArticle/NewArticle'
import EditArticle from './EditArticle/EditArticle'
import {useSelector} from "react-redux"
import MyArticles from './MyArticles/MyArticles'
import SingleArticle from './SingleArticlePage/SingleArticle'
import NotFound from './NotFound'

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
            <Route exact path="/new-article" element={<NewArticle/>}/>
            <Route exact path="/articles/:id/edit" element={<EditArticle/>}/>
            <Route exact path="/articles/me" element={<MyArticles/>}/>
          </>
        })
        <Route exact path="/articles/:id" element={<SingleArticle/>}/>
        <Route exact path="*" element={<NotFound/>}/>
        
      </Routes>
  
    </div>
    
  )
}

export default Blog
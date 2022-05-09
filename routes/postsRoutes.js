const router=require('express').Router()
const BlogPost=require('../models/BlogPost')
const authUser=require('../middleware/authMiddleware')

router.post('/',authUser,async(req,res)=>{
    const {title,content,image}=req.body;
    try{
        
    }
    catch(e){

    }
})
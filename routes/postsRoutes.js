const router=require('express').Router()
const BlogPost=require('../models/BlogPost')
const authUser=require('../middleware/authMiddleware')

router.post('/',authUser,async(req,res)=>{
    const {title,content,image}=req.body;
    try{
        const article=await BlogPost.create({title,content,image,creator:req.user._id})
        req.user.articles.push(article._id)
        req.json(article)
    }
    catch(e){
        res.status(400).json(e.message)

    }
})

module.exports=router
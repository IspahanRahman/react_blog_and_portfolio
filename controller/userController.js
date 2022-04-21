const User=require('../models/User')
 
exports.signUpController=async (req,res)=>{
    const {email,password}=req.body

    try{
        const user=await User.create({email,password})
        await user.generateAuthToken()
        res.status(201).json(user)
    }
    catch(e){
        let msg;
        if(e.code==11000){
            msg='Email already exists'
        }
        else{
            msg=e.message;
        }
        res.status(400).json(msg)
    }
}

exports.loginController=async (req,res)=>{
    const {email,password}=req.body
    try{
        const user=await User.findByCredentials(email,password)
        await user.generateAuthToken()
        res.json(user)

    }
    catch(e){
        res.status(400).json(e.message)
    }
}
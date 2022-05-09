const User=require('../models/User')
exports.signUpController=async (req,res)=>{
    const {email,password}=req.body

    try{
        const user=await User.create({email,password})
        const token=await user.generateAuthToken()
        res.status(201).json({user,token})
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
        const token=await user.generateAuthToken()
        res.json({user,token})

    }
    catch(e){
        res.status(400).json(e.message)
    }
}

exports.logoutController=async(req,res)=>{
    try{
        req.user.tokens=req.user.tokens.filter((tokenObj)=>{
            return tokenObj.token !==req.token
        })
        await req.user.save();
        res.status(200).send()

    }catch(e){
        res.status(400).json(e.message)
    }
}
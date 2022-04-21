const mongoose=require('mongoose')
const bcrypt=require('bcrypt')
const jsonwebtoken=require('jsonwebtoken')

const Userschema=new mongoose.Schema({
    email:{
        type:'string',
        lowercase:true,
        unique:true,
        required:[true,"Can't be blank"],
        match: [/\S+@\S+\.\S+/,'is invalid'],
        index:true

    },
    password:{
        type:'string',
        required:[true,"Can't be blank"]
    },
    tokens:[],
    articles:[]
})

Userschema.pre('save',function(next){
    const user=this;
    if(!user.isModified('password')) return next();
    //user is being created or updated
    bcrypt.genSalt(10,function(err,salt){
        if(err) return next(err)

        bcrypt.hash(user.password,salt,function(err,hash){
            if(err) return next(err)

            user.password=hash;
            next();
        })
    })

})
Userschema.methods.toJSON=function(){
    const user=this;
    const userObject=user.toObject();
    delete userObject.password;
    delete userObject.tokens;
    delete userObject.articles;
    return userObject;
}
Userschema.methods.generateAuthToken=async function(){
    const user=this;
    const token=jsonwebtoken.sign({_id:user._id.toString()},'appSecret');
    console.log(token)
    user.tokens=user.tokens.concat({token})
    await user.save()
    return;
}
Userschema.statics.findByCredentials=async function (email,password){
    const user=await User.findOne({email})
    if(!user) throw new Error('Invalid email or passwords');
    const isMatch=bcrypt.compare(password,user.password)
    if(!isMatch) throw new Error('Invalid email or password')
    //if there is match
    return user;
    

}

const User=mongoose.model('User',Userschema)

module.exports=User
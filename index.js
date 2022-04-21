require('dotenv').config()
const express=require('express')
const nodemailer=require('nodemailer')
const cors=require('cors')
const setRoute = require('./routes/route')
require('./connection')

const app=express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

setRoute(app)


app.get('/',()=>{
    resizeBy.send('Welcome to my form')
})

app.post('/contact/api/form',(req,res)=>{
    let data=req.body
    console.log(data)
    let smtpTransport=nodemailer.createTransport({
        service:'gmail',
        auth:{
           user:'ispahanrahman133@gmail.com',
           pass:'spszsafxdfmijcfc' 
        }

    })
    let mailOptions={
        from:data.email,
        to:'ispahanrahman133@gmail.com',
        subject:`Message from ${data.subject}`,
        html:`
        <h3>Informations</h3>
            <ul>
                <li>Name: ${data.name}</li>
                <li>Email: ${data.email}</li>
                <li>Subject: ${data.subject}</li>
                <p>Message: ${data.message}</p>
            </ul>
        `
    }

    smtpTransport.sendMail(mailOptions,(error,response)=>{
        if(error){
            console.log(error)
        }
        else{
            res.send('Success')
        }
    })
    smtpTransport.close()
})


const PORT=process.env.PORT||3001

app.listen(PORT,()=>{
    console.log(`Server is runnig on port ${PORT}`)
})



const mongoose=require('mongoose')
require('dotenv').config()
mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.d2fg3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,()=>{
    console.log('Connect to db');
})

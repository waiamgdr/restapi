const express= require('express')
const mongoose=require('mongoose')
const dotenv=require('dotenv')
// const cors=require ('cors')
const app= express();
app.use(express.json())
// app.use (cors ())
dotenv.config()
const port=process.env.Port
mongoose.connect (process.env.URI)
.then(()=>console.log("db conected"))
.catch((err)=>console.log(err))
app.use('/api',require('./rooter/userroote'))
app.listen(port,(err)=>{
    err ? console.log('err'): console.log ('server running in port :'+port)} )



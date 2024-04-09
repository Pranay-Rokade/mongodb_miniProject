const express= require("express")
const mongoose= require('mongoose')
const cors= require("cors")
const UserModel=require('./models/User')

const app =express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://evekieth:EVEkieth1004@users.valkgkj.mongodb.net/Users")

app.post('/register',(req,res)=>{
    const {name,email,password} = req.body;
     UserModel.create({name,email,password})
    .then(Users=>res.json(Users))
    .catch(err=>res.json(err))
})

app.listen(8000,()=>{
    console.log("server is running")
})
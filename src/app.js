
const express = require("express");
const {SubscriberModel} = require("./models/subscribers")
const app = express()
app.use(express.json())

// Your code goes here

app.get("/",async(req,res)=>{
    res.sendFile(`${__dirname}/pages/intro.html`)
})

app.get("/subscribers",async(req,res)=>{
    try {
        const user=await SubscriberModel.find()
        res.status(200).json(user)
    } catch (error) {
       res.status(400).send(error.message)
    }
})

app.post("/add",async(req,res)=>{
    try {
        const{name,subscribedChannel}= req.body
    const AddSubscriber= new SubscriberModel({name,subscribedChannel})
    await AddSubscriber.save()
    res.status(200).send({msg:"SignUp Successfully"})
    } catch (error) {
        res.status(400).json({msg:error.message})
    }
})

app.get("/subscribers/:id",async(req,res)=>{
    let id =req.params.id;
    try {
        const idView= await SubscriberModel.findById(id)
        res.status(200).json(idView)
    } catch (error) {
        console.log(error.message)
    }
})
app.get("/subscribersName",async(req,res)=>{
    
    try {
        const nameView = await SubscriberModel.find().select({name:1,subscribedChannel:1,_id:0})
        res.status(200).json({nameView})
    } catch (error) {
        console.log(error.message)
        res.status(400).json({error:error.message} )
    }
})



module.exports= app















module.exports = app;

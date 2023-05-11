const express=require("express")
const mongoose=require("mongoose")
const app=express()
app.use(express.json());
let rout=require("./Roots/userRoots")
app.use("/api",rout)
mongoose.connect("mongodb://127.0.0.1:27017/items").then(()=>{console.log("DataBase is connected")}).catch(()=>{console.log("Not connected")})
app.listen(5001,()=>{console.log("server is running.....")})
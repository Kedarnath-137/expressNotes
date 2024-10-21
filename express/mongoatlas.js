const express = require("express");
const mongoose = require("mongoose");

const app = express();

const uri = "mongodb+srv://kedarnath:kedar123@cluster0.toq1f.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";


async function connect(){
    try{
        await mongoose.connect(uri);
        console.log("connected to mongo DB");
    }catch (error){
        console.log(error)
    }
}

connect()

app.listen(8002, ()=>{console.log("server is running")})
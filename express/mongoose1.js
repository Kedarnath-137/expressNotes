

const mongoose = require("mongoose");
const express = require("express");
const app = express();


// connection
mongoose.connect("mongodb://localhost:27017/kedar1")
.then(()=>{console.log("Mongo DB connected")})
.catch((err)=>{console.log("mongo err", err)});

//Schema
const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
    },
    lastName:{
        type:String,
    },
    email:{
        type: String,
        required:true,
        unique:true
    },
    jobTitle:{
        type:String,
    },
    gender: {
        type:String,
    }
})


const User = mongoose.model("user", userSchema);

app.post("./users", (req, res)=>{
    if(
        !body ||
        ! body.firstName ||
        !body.last_name
    )
})

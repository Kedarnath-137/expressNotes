const mongoose = require("mongoose")

const uri = "mongodb+srv://kedar:kedar123@first.gf0ec.mongodb.net/?retryWrites=true&w=majority&appName=first";

async function connect (){
    try{
        await mongoose.connect(uri);
        console.log("mongo db connected")
    }catch (error){
        console.log("error", error)
    }
}

connect()
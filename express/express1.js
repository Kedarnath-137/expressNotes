
const express = require("express");

const app = express();

app.get("/", (req, res) =>{
    return res.send("hello from Home page")
})

app.get("/about",(req, res)=>{
    return res.send("hello from about page"+" "+req.query.name)
} )

app.listen(8000, ()=>{console.log("running")})
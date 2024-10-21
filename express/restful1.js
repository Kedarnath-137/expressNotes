

const express = require("express");
const users = require("./MOCK_DATA.json");
const fs = require("fs");
const app = express();
const port = 8001;

//middleware - plugin
app.use(express.urlencoded({extended:false}));
// app.use(express.json());

app.use((req, res, next)=>{
    console.log("hello from middleware 1");
    req.myUserName = "kedarnath.developer";
    fs.appendFile("./task.txt", `${Date.now()}: ${req.method}: ${req.path} \n` ,(err, data)=>{
        next();
    })
    next()
})
// if we won't write next() function it will not go forward.
// we must write next() in the middleware.
app.use((req, res, next)=>{
    console.log("hello from middleware 2", req.myUserName);
    next()
})

//Routes
// get html render
app.get("/users", (req, res)=>{
    const html = `
    <ul>
    ${users.map((user) =>`<li>${user.first_name}</li>`).join("")}
    <ul>
    `
    res.send(html)
})

//get backend
app.get("/api/users", (req, res)=>{
    console.log("I am in get route", req.myUserName)
    console.log(req.headers)
    res.setHeader("X-myname","kedar")
    return res.json(users)
})

//get params :id
app.get("/api/users/:id", (req, res)=>{
    const id = Number(req.params.id)
    const user = users.find((user)=> user.id == id);
    return res.json(user);
})

// post 
app.post("/api/users",(req, res)=>{
    // TODO: Create new user
    const body = req.body;
    console.log("body",body)
    users.push({ id:users.length+1 , ...body});
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users),(err, data)=>{
        return res.json({status:"success", id:users.length})
    })
   
    
})


app.listen(port, ()=>{console.log("server started running")})



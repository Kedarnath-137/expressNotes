const http = require("http");
const fs = require("fs");

// const server = http.createServer((req, res)=>{
//     const log = `${Date.now()}: ${req.url} New Req recevied \n`;
//     fs.appendFile("test.txt", log, (err, data)=>{
//         if(err){
//             console.log("error", err)
//         }else{
//             res.end("hello from sever")
//         }
//     })
// })

const server = http.createServer((req, res) =>{
    switch(req.url){
        case "/":
            res.end("HomePage", );
        break;
        case "/about":
            res.end("I am kedarnath")
        break;
        default:
            res.end("404 not found")
    }
})

server.listen(8000, ()=>{console.log("server started")})


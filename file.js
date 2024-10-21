
const fs = require("fs");
const os = require("os");
// console.log(os.cpus().length);

// note:
// sync funtion return the value
// Async function doesn't return the value but it take the callback function.
// default thread pool size = 4
// max ? depend machine to machine cpu


// Sync---- blocking
//  fs.writeFileSync("./test.txt", "hey there!");

// const result = fs.readFileSync("./contact.txt", "utf-8");
// console.log(result)

// fs.appendFileSync("test.txt", "i am web developer\n");

// fs.cpSync("./test.txt", "./copy.txt");
// it is create copy.txt file with full copy of test.txt

// fs.unlinkSync("./copy.txt"); // to delete the file 

// console.log(fs.statSync("./test.txt"));


// ASync--- non-blocking
// fs.writeFile("./test.txt", "helloWorld Sync", (err)=>{});

// fs.readFile("./contact.txt", "utf-8", (err, result) =>{
//     if(err){
//         console.log("err", err)
//     }else{
//         console.log(result)
//     }
// })





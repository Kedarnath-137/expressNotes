const fs = require("fs");

// console.log("first");
// const res = fs.readFileSync("./test.txt", "utf-8");
// console.log(res);
// console.log("second");
// setTimeout(()=>{console.log("kedar")},0)

console.log("first");
fs.readFile("./test.txt", "utf-8",()=>{
    console.log("finished")
});

console.log("second");
setTimeout(()=>{console.log("kedar")},0)
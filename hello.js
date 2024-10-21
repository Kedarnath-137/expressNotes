console.log("hey there! i am js");

// const math = require("./math")

// console.log(math(5, 5))
// console.log(math.addFn(5,5))
// console.log(math.subFn(5,5))

// we can do destructing
const {addFn, subFn} = require("./math")
console.log(addFn(5,4))
console.log(subFn(5,3))

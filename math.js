

function add(a, b){
    return a+b;
}

// module.exports = add;

function sub(a, b){
    return a-b;
}

module.exports = {
    addFn:add,
    subFn:sub,
}

// module.exports = {add, sub} we can use this also.
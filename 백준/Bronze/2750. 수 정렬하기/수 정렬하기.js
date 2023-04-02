const input = require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n");
const [max] = input.shift().split(' ').map(Number)
const arr = input.map(Number).sort((a, b) => a - b)

arr.forEach(item => {
    console.log(item)
})
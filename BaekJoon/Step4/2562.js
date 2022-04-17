const input = require("fs").readFileSync("../dev/stdin", "utf8").trim().split("\n");
// const input = require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n");
const arr = input.map(Number)
const max = Math.max(...arr)
const index = arr.findIndex(item => item === max)
console.log(max)
console.log(index + 1)

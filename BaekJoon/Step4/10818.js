const input = require("fs").readFileSync("../dev/stdin", "utf8").trim().split("\n");
// const input = require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n");
const [max] = input.shift().split(' ').map(Number);
const arr = input.shift().split(' ').map(Number);
console.log(Math.min(...arr), Math.max(...arr))
const input = require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n");
const [len, max] = input.shift().split(' ').map(Number);
const arr = input.shift().split(' ').map(Number);
arr.filter(item => item < max).forEach(item => { console.log(item) })
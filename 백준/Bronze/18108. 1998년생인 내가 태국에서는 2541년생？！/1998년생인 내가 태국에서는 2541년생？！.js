const input = require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n");
const [year] = input.shift().split(' ').map(Number);

console.log(year - 543)
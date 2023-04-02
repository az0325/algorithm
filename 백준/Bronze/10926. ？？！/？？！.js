const input = require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n");
const [name] = input.shift().split(' ')
console.log(name + '??!')
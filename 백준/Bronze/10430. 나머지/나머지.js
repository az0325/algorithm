let input = require("fs").readFileSync("/dev/stdin", "utf8").trim().split("÷\n");
let line = input.shift().split(' ').map(Number);
let a = line[0]
let b = line[1]
let c = line[2]

console.log((a + b) % c)
console.log(((a % c) + (b % c)) % c)
console.log((a * b) % c)
console.log(((a % c) * (b % c)) % c)
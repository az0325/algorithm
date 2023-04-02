let input = require("fs").readFileSync("/dev/stdin", "utf8").trim().split("÷\n");
let line1 = input.shift().split(' ').map(Number);

console.log(line1[0] + line1[1])
console.log(line1[0] - line1[1])
console.log(line1[0] * line1[1])
console.log(parseInt(line1[0] / line1[1]))
console.log(line1[0] % line1[1])
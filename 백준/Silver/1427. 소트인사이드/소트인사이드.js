const input = require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n");
const data = input[0].split('').map(Number).sort((a, b) => b - a)
let result = ''
data.forEach(item => { result += item })
console.log(result)
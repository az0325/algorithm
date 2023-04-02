const input = require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n");
const [start] = input.shift().split(' ').map(Number)

let num = start
let sum = null
let index = 0
while (true) {
    index++
    sum = Math.floor(num / 10) + num % 10;
    num = (num % 10) * 10 + sum % 10;
    if (start === num) break;
}

console.log(index)
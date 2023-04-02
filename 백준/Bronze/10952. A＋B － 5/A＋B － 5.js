let input = require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n");
let num = []

let len = input.length
for (let i = 0; i < len - 1; i++) {
    num = input.shift().split(' ').map(Number)
    console.log(num[0] + num[1])
}
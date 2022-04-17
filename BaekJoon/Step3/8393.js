// const input = require("fs").readFileSync("../dev/stdin", "utf8").trim().split("\n");
const input = require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n");
const [num] = input.shift().split(' ').map(Number);

let result = 0
for (let i = 1; i <= num; i++) {
    result = result + i
}

console.log(result)
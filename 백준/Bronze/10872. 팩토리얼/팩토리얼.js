let input = require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n");
let num = input.shift().split(' ').map(Number)[0];

function re(num) {
    if (num === 0) return 1;
    if (num < 0) return 0;
    return num * re(num - 1)
}

console.log(re(num))
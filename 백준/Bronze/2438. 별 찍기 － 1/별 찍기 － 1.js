const input = require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n");
const [max] = input.shift().split(' ').map(Number);

let result = ''
for (let i = 1; i <= max; i++) {
    if (i > 1) result += '\n'
    for (let j = 1; j <= i; j++) {
        result += '*'
    }
}

console.log(result)
// const input = require("fs").readFileSync("../dev/stdin", "utf8").trim().split("\n");
const input = require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n");
const [max] = input.shift().split(' ').map(Number);

let result = ''
for (let i = 0; i < max; i++) {
    for (let j = 0; j < max - i - 1; j++) {
        result += ' ';
    }

    for (let k = 0; k <= i; k++) {
        result += '*';
    }

    result += '\n';
}

console.log(result)
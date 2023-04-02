const input = require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n");
const [num] = input.shift().split(' ').map(Number);

let answer = '';

for (let i = 1; i <= num; i++) {
    answer += i + "\n";
}

console.log(answer);
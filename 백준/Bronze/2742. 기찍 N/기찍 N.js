const input = require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n");
const [num] = input.shift().split(' ').map(Number);

let answer = '';
for (let i = num; i > 0; i--) {
    answer += i + "\n";
}

console.log(answer);
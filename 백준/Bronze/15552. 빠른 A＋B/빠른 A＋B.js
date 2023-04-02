const input = require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n");
const max = Number(input[0]);

let answer = '';
for (let i = 1; i <= max; i++) {
    const [num1, num2] = input[i].split(' ')
     answer += Number(num1) + Number(num2) + "\n";
}

console.log(answer)
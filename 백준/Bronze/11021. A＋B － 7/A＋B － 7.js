const input = require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n");
const [max] = input.shift().split(' ').map(Number);

for (let i = 1; i <= max; i++) {
    const [num1, num2] = input.shift().split(' ').map(Number);
    console.log(`Case #${i}: ${num1 + num2}`)
}
const input = require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n");
const [max] = input.shift().split(' ').map(Number);

for (let i = 0; i < max; i++) {
    const [num1, num2] = input.shift().split(' ').map(Number);
    console.log(num1 + num2)
}
const input = require("fs").readFileSync("../dev/stdin", "utf8").trim().split("\n");
// const input = require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n");
const [A, B, C] = input.map(Number)
const calc = A * B * C
const data = calc.toString().split('').map(Number)

const result = []
for (let i = 0; i < 10; i++) {
    result[i] = data.filter(item => item === i).length
}

result.forEach(item => { console.log(item) })
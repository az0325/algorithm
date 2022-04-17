// const input = require("fs").readFileSync("../dev/stdin", "utf8").trim().split("\n");
const input = require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n");
const [num] = input.shift().split(' ').map(Number);

for (let i = 1; i < 10; i++) {
    console.log(`${num} * ${i} = ${num * i}`)
}
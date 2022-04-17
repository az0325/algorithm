const input = require("fs").readFileSync("../dev/stdin", "utf8").trim().split("\n");
// const input = require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n");
const [num] = input.shift().split(' ').map(Number);

for (let i = num; i > 0; i--) {
    console.log(i)
}
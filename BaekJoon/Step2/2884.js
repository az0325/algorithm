// let input = require("fs").readFileSync("../dev/stdin", "utf8").trim().split("\n");
let input = require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n");
let line = input.shift().split(' ').map(Number)
let num1 = line[0]
let num2 = line[1]

if (num2 - 45 >= 0) {
    console.log(num1, num2 - 45);
} else if (num1 - 1 >= 0) {
    console.log(num1 - 1, 15 + num2);
} else {
    console.log(23, 15 + num2);
}
// let input = require("fs").readFileSync("../dev/stdin", "utf8").trim().split("\n");
let input = require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n");
let num = input.shift().split(' ').map(Number);

if ((num % 4 === 0) && (num % 100 !== 0)) {
    console.log("1")
} else if (num % 400 === 0) {
    console.log("1")
} else {
    console.log("0")
}
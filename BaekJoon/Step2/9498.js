// let input = require("fs").readFileSync("../dev/stdin", "utf8").trim().split("\n");
let input = require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n");
let nums = input.shift().split(' ').map(Number);
let num1 = nums[0]
let num2 = nums[1]

if (num1 > num2) {
    console.log(">")
} else if (num1 < num2) {
    console.log("<")
} else if (num1 === num2) {
    console.log("==")
}
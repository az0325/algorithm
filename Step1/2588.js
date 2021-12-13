// let input = require("fs").readFileSync("../dev/stdin", "utf8").trim().split("\n");
let input = require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n");
let num1 = input.shift().split(' ').map(Number)[0];
let num2 = input.shift().split(' ').map(Number)[0];

let hund = parseInt(num2 / 100) * 100
let ten = parseInt((num2 - hund) / 10) * 10
let one = num2 - hund - ten

console.log(num1 * one)
console.log(num1 * ten / 10)
console.log(num1 * hund / 100)
console.log(num1 * num2)
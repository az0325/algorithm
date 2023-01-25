// let input = require("fs").readFileSync("../dev/stdin", "utf8").trim().split("\n");
let input = require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n");
const [count] = input.shift().split(" ").map(Number);
const [number] = input.shift().split(" ").map(String);

const sumNumber = number.toString().split("");

let result = 0;
sumNumber.forEach((item) => {
  result += Number(item);
});

console.log(result);

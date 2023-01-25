// let input = require("fs").readFileSync("../dev/stdin", "utf8").trim().split("\n");
let input = require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n");
const [price] = input.shift().split(" ").map(Number);
const [count] = input.shift().split(" ").map(Number);

let totalPrice = 0;
input.forEach((item) => {
  const [price, count] = item.split(" ");
  totalPrice += price * count;
});

console.log(totalPrice === price ? "Yes" : "No");

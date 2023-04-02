const input = require("fs")
  //   .readFileSync("/dev/stdin", "utf8")
  .readFileSync("../dev/stdin", "utf8")
  .trim()
  .split("\n");

const [num] = input.shift().split(" ").map(Number);

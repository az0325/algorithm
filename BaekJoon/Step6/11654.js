// let input = require("fs").readFileSync("../dev/stdin", "utf8").trim().split("\n");
let input = require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n");
const string = input.shift().split(" ");

console.log(string.toString().charCodeAt(0));

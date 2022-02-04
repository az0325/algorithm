let input = require("fs").readFileSync("../dev/stdin", "utf8").trim().split("\n");
// let input = require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n");
let array = input.map((s) => s.replace("\r", "").split(" "));
const arr = Array.from({ length: 5 }, () => Array.from({ length: 5 }, () => array.shift()));

// const visited = Array.from(Array(3).fill(null), () => Array())

// console.log(visited)

const dx = [1, -1, 0, 0, 0, 0];
const dy = [0, 0, 1, - 1, 0, 0];
const dz = [0, 0, 0, 0, 1, - 1];

// const stack = []

// while (stack.length) {
//     const [] = stack.shift()
// }
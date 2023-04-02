let input = require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n");
input.shift()
let arr = input.map(Number);

const max = Math.max(...arr)
const dp = []
dp[1] = 1
dp[2] = 2
dp[3] = 4

for (let i = 4; i <= max; i++) {
  dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3]
}

arr.forEach(val => console.log(dp[val]));
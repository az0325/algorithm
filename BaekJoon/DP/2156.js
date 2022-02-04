let input = require("fs").readFileSync("../dev/stdin", "utf8").trim().split("\n");
// let input = require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n");
let [num] = input.shift().split(' ').map(Number);
let array = [0, ...input.map(Number)]

// dp정의: N
// 연속 3잔 불가능
// 
const dp = []
dp[0] = array[0]
dp[1] = array[1]
dp[2] = dp[1] + array[2]

for (let i = 3; i <= num; i++) {
  dp[i] = dp[i - 1] + Math.max(dp[i - 2] - array[i], 0)
}

console.log(dp)
console.log(dp[num])
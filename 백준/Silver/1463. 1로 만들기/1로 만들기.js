let input = require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n");
let [num] = input.shift().split(' ').map(Number);

// dp정의: 크기가 N일 때, 횟수의 최솟값
const dp = []
dp[1] = 0
dp[2] = 1
dp[3] = 1
dp[4] = 2
dp[5] = 3

for (let i = 6; i <= num; i++) {
  const yeBiGap = [dp[i - 1]]
  if (i % 2 === 0) yeBiGap.push(dp[i / 2])
  if (i % 3 === 0) yeBiGap.push(dp[i / 3])
  dp[i] = Math.min(...yeBiGap) + 1
}

console.log(dp[num])
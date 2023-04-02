let input = require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n");
let [num] = input.shift().split(' ').map(Number);

// dp정의: N을 제곱수로 나타낼때, 최소 항 갯수
// 1 4 9 16 25
const dp = []
dp[0] = 0
dp[1] = 1
dp[2] = 2

for (let i = 3; i <= num; i++) {
  dp[i] = i
  for (let j = 1; j * j <= i; j++) {
    dp[i] = Math.min(dp[i], dp[i - j * j]);
  }

  dp[i] += 1
}

console.log(dp[num])
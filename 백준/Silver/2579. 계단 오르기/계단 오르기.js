const input = require("fs").readFileSync("./dev/stdin").toString().split("\n");
const [num] = input.shift().split(" ").map(Number);
const arr = [0, ...input.map(Number)];

// N번째 계단을 밟았을 때 얻을 수 있는 최대값
const dp = [];
dp[0] = arr[0];
dp[1] = arr[1];
dp[2] = dp[1] + arr[2];

// 어디서 와야 N이 될 수 있을 까?
// 직전에 어디서 왓을 까요호호호호호호호
// 1. 하나 전 아니면 두개 전
// 2. 전전을 밟았으면 두개전. 전전을 안밟았으면 한개전

for (let i = 3; i <= num; i++) {
  dp[i] = Math.max(dp[i - 2] + arr[i], dp[i - 3] + arr[i - 1] + arr[i]);
}

console.log(dp[num]);

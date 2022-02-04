let input = require("fs").readFileSync("../dev/stdin", "utf8").trim().split("\n");
// let input = require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n");
let [num] = input.shift().split(' ').map(Number);

// dp정의: 2×N을 1×2, 2×1 타일로 채우는 방법의 수
const dp = []
dp[1] = 1
dp[2] = 2

for (let i = 3; i <= num; i++) {
  dp[i] = (dp[i - 1] + dp[i - 2]) % 10007
}

console.log(dp[num])

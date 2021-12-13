let input = require("fs").readFileSync("../dev/stdin", "utf8").trim().split("\n");
// let input = require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n");
let [num] = input.shift().split(' ').map(Number);

// dp정의: N을 배달할 때 최소 몇봉지냐 이말이다 (봉투는 3이랑 5)
const dp = []
dp[3] = 1
dp[4] = -1
dp[5] = 1
dp[6] = 2
dp[7] = -1
dp[8] = 2
dp[9] = 3

/*
dp[10]구하기 === N을 배달할 때 몇봉지냐 이말이다 (봉투는 3이랑 5)
** 어떻게 N까지 왔을까? **
*/

for (let i = 10; i <= num; i++) {
  if (dp[i - 3] === -1 && dp[i - 5] === -1) dp[i] = -1
  else if (dp[i - 3] !== -1 && dp[i - 5] === -1) dp[i] = dp[i - 3] + 1
  else if (dp[i - 3] === -1 && dp[i - 5] !== -1) dp[i] = dp[i - 5] + 1
  else if (dp[i - 3] !== -1 && dp[i - 5] !== -1) dp[i] = Math.min(dp[i - 3], dp[i - 5]) + 1
}

console.log(dp[num])
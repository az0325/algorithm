let input = require("fs").readFileSync("../dev/stdin", "utf8").trim().split("\n");
// let input = require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n");
input.shift()
let arr = input.map(Number);

// dp정의: N을 1,2,3의 합으로 나타내는 경우의수
const max = Math.max(...arr)
const dp = []
dp[1] = 1
dp[2] = 2
dp[3] = 4

/*
dp[4]구하기 === 4을 1,2,3의 합으로 나타내는 경우의수
** 어떻게 4까지 왔을까? **
*/

for (let i = 4; i <= max; i++) {
  dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3]
}

arr.forEach(val => console.log(dp[val]));
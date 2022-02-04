let input = require("fs").readFileSync("../dev/stdin", "utf8").trim().split("\n");
// let input = require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n");
let [num] = input.shift().split(" ").map(Number);
let array = [0, ...input.shift().split(" ").map(Number)];

// dp정의: N의 최대값
const dp = []

dp[0] = 0
dp[1] = array[1]
// dp[2] = Math.max(array[1], dp[1] + array[0])

// 어디서와야 3이 될까??

for (let i = 2; i <= num; i++) {

  // dp[i] = Math.max(dp[i - 1] + arr[0], dp[i - 2] + arr[0],)

  // for (let j = 1; j <= i; j++) {
  // dp[i] = Math.max((dp[i - 1] + array[1], dp[i-2] + array[2], dp[]))
  // }



  dp[i] = -Infinity
  for (let j = 1; j <= i; j++) {
    dp[i] = Math.max(dp[i], (dp[i - j] + array[j]))
  }

  // dp[i] = Math.max(전꺼1, 전꺼2, 전꺼3, 전꺼4 ...)
  // dp[i] = 절대답안되는거
  // for (let i = 0; i < 4; i++)
  // dp[i] = Math.max(절대답안되는거, 전꺼[i])
}

console.log(dp)
console.log(dp[num])
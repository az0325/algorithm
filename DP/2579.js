let input = require("fs").readFileSync("./stdin", "utf8").trim().split("\n");
let [num] = input.shift().split(" ").map(Number);
let array = [0, ...input.map(Number)];

const dp = []

dp[0] = 0
dp[1] = array[1]

for (let i = 2; i <= num; i++) {
	for (let j = 1; j < 2; j++) {

	}
}

console.log(dp)
console.log(dp[num])
// const input = require("fs").readFileSync("../dev/stdin", "utf8").trim().split("\n");
const input = require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n");
const [num1, num2, num3] = input.shift().split(' ').map(Number);

// 같은게 몇개인지 판단 후 계산

// 같은거 3개 -> 10000 + 눈 * 1000
if (num1 === num2 && num2 === num3 && num1 === num3) {
    console.log(10000 + (num1 * 1000))
}

// 같은거 2개 -> 1000 + 눈 * 100
else if ((num1 === num2 && num2 !== num3 && num1 !== num3)) {
    console.log(1000 + (num1 * 100))

} else if ((num1 !== num2 && num2 !== num3 && num1 === num3)) {
    console.log(1000 + (num1 * 100))

} else if ((num1 !== num2 && num2 === num3 && num1 !== num3)) {
    console.log(1000 + (num2 * 100))
}

// 3개 다 다른거 -> 젤 큰거 * 100
else if ((num1 !== num2 && num2 !== num3 && num1 !== num3)) {
    const max = Math.max(num1, num2, num3)
    console.log(max * 100)
}
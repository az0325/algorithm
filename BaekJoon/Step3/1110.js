const input = require("fs").readFileSync("../dev/stdin", "utf8").trim().split("\n");
// const input = require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n");
const [start] = input.shift().split(' ').map(Number)

// 26부터 시작한다. 2+6 = 8이다. 새로운 수는 68이다. 6+8 = 14이다. 
// 새로운 수는 84이다. 8+4 = 12이다. 새로운 수는 42이다. 4+2 = 6이다. 새로운 수는 26이다.

let num = start
let sum = null
let index = 0
while (true) {
    index++
    sum = Math.floor(num / 10) + num % 10;
    num = (num % 10) * 10 + sum % 10;
    if (start === num) break;
}

console.log(index)
const input = require("fs").readFileSync("../dev/stdin", "utf8").trim().split("\n");
const array = input.shift().split('').map(Number)

const X = array[0]
const Y = array[2]

const arr = [...new Array(X)].map(() => input.shift().split('').map(Number))
let result = new Array(X, Y)
let result = 0

for (let i = 0; i < X; i++) {
  for (let j = 0; j < Y; j++) {
    if (arr[i][j] === 0) {
      break
    } else {
      console.log(`[${i}, ${j}]`)
      result += 1
    }
  }
}

console.log(result)
let input = require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n");
let array = input.shift().split(' ').map(Number);

const X = array[1]
const Y = array[0]

const arr = [...new Array(Y)].map(() => input.shift().split('').map(Number))

const dir = [[0, 1], [0, -1], [1, 0], [-1, 0]]

const stack = [[0, 0, 0]]

while (stack.length) {
  const [x, y, dis] = stack.shift();

  for (let i = 0; i < 4; i++) {
    const xPos = x + dir[i][0];
    const yPos = y + dir[i][1];

    if (0 <= xPos && 0 <= yPos && xPos < X && yPos < Y) {
      if (arr[yPos][xPos] === 1) {
        arr[yPos][xPos] = dis + 2;
        stack.push([xPos, yPos, dis + 1]);
      }
    }
  }
}

console.log(arr[Y - 1][X - 1]);
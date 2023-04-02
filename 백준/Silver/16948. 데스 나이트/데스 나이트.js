let input = require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n");
let num = input.shift().split(' ').map(Number);
let array = input.shift().split(' ').map(Number);

const move = num[0]
const r1 = array[0]
const c1 = array[1]
const r2 = array[2]
const c2 = array[3]

// (r-2, c-1), (r-2, c+1), (r, c-2), (r, c+2), (r+2, c-1), (r+2, c+1)
const dirX = [-2, -2, 0, 0, 2, 2]
const dirY = [-1, 1, -2, 2, -1, 1]

const stack = [[r1, c1, 0]]

let visited = new Array(move)
for (var i = 0; i < visited.length; i++) {
    visited[i] = new Array(move).fill(false)
}

let arr = new Array(move)
for (var i = 0; i < arr.length; i++) {
    arr[i] = new Array(move).fill(0)
}

visited[r1][c1] = true

while (stack.length) {
    const [x, y, count] = stack.shift()

    for (let i = 0; i < 6; i++) {
        const xPos = x + dirX[i]
        const yPos = y + dirY[i]

        if (xPos >= 0 && yPos >= 0 && xPos < move && yPos < move && !visited[xPos][yPos]) {
            visited[xPos][yPos] = true
            arr[xPos][yPos] = arr[x][y] + 1
            stack.push([xPos, yPos, count + 1]);
        }
    }
}

if (visited[r2][c2]) {
    console.log(arr[r2][c2])
} else {
    console.log(-1)
}
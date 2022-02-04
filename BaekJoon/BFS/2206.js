let input = require("fs").readFileSync("../dev/stdin", "utf8").trim().split("\n");
// let input = require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n");
let array = input.shift().split(' ').map(Number);

const N = array[0]
const M = array[1]

const arr = [...new Array(N)].map(() => input.shift().split('').map(Number))
const visited = [...new Array(N)].map(() => [...new Array(M)].map(() => new Array(2).fill(false)))

const dir = [[0, 1], [0, -1], [1, 0], [-1, 0]]

const stack = [[0, 0, 1, 0]]

visited[0][0][0] = true

function bfs() {
    while (stack.length) {
        const [x, y, dis, drill] = stack.shift();

        if (x === N - 1 && y === M - 1) {
            return dis
        }

        for (let i = 0; i < 4; i++) {
            const xPos = x + dir[i][0];
            const yPos = y + dir[i][1];

            if (0 <= xPos && 0 <= yPos && xPos < N && yPos < M) {
                if (arr[xPos][yPos] === 0 && !visited[xPos][yPos][drill]) {
                    visited[xPos][yPos][drill] = true
                    stack.push([xPos, yPos, dis + 1, drill]);
                } else if (arr[xPos][yPos] === 1 && !visited[xPos][yPos][1] && drill === 0) {
                    visited[xPos][yPos][1] = true
                    stack.push([xPos, yPos, dis + 1, drill + 1]);
                }
            }
        }
    }

    return -1
}

console.log(bfs());
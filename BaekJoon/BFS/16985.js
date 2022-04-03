let input = require("fs").readFileSync("../dev/stdin", "utf8").trim().split("\n");
// let input = require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n");
let array = input.map((s) => s.replace("\r", "").split(" "));
const arr = Array.from({ length: 5 }, () => Array.from({ length: 5 }, () => array.shift()));

// const visited = Array.from(Array(3).fill(null), () => Array())

// console.log(visited)

const dirX = [1, -1, 0, 0, 0, 0];
const dirY = [0, 0, 1, - 1, 0, 0];
const dirZ = [0, 0, 0, 0, 1, - 1];

const rotating = () => {
    for (let i = 0; i < n; i++)
        for (let j = 0; j < n; j++)
            for (let k = 0; k < n; k++)
                rotated[0][i][j][k] = input[i][j][k];

    for (let rot = 1; rot < 4; rot++) {
        for (let i = 0; i < n; i++) {
            for (let j = 0; j < n; j++) {
                for (let k = 0; k < n; k++) {
                    rotated[rot][i][j][k] = rotated[rot - 1][i][k][n - 1 - j];
                }
            }
        }
    }
}

const stacking = (bit) => {
    for (let i = 0; i < n; i++) {
        let idx = (bit & 3); bit >>= 2;
        for (let j = 0; j < n; j++) {
            for (let k = 0; k < n; k++) {
                mp[i][j][k] = rotated[idx][stackingOrder[i]][j][k];
            }
        }
    }
}

const bfs = () => {
    const stack = [[0, 0, 0, 0]]

    while (stack.length) {
        const [x, y, z, count] = stack.shift()

        for (let i = 0; i < 6; i++) {
            const nxtX = x + dirX[i];
            const nxtY = y + dirY[i];
            const nxtZ = z + dirZ[i];

            if (!bound(nxtX, nxtY, nxtZ)) continue;
            if (dist[nxtX][nxtY][nxtZ] != -1) continue;
            if (mp[nxtX][nxtY][nxtZ] == 0) continue;
            if (nxtX == n - 1 && nxtY == n - 1 && nxtZ == n - 1) return dist[x][y][z] + 1;
            dist[nxtX][nxtY][nxtZ] = dist[x][y][z] + 1;
            q.push({ nxtX, nxtY, nxtZ });
        }
    }
}
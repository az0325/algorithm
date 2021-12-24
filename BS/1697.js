let input = require("fs").readFileSync("../dev/stdin", "utf8").trim().split("\n");
// let input = require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n");
const [N, K] = input.shift().split(' ').map(Number);

console.log("수빈 : ", N)
console.log("동생 : ", K)

// 1초에 x+1 / x-1 / x*2
// 동생이 더 작을 경우 무조건 x-1 만 가능
// 둘이 같으면 움직일 필요 없음

let count = 0

const visit = new Array(10000)
const queue = [];

queue.push([N, 0]);
visit[N] = 1;
while (queue.length) {
    const [cur, time] = queue.shift();
    console.log(queue)
    if (cur === K) return time;
    for (next of [cur - 1, cur + 1, cur * 2]) {
        if (!visit[next] && next >= 0 && next <= 100000) {
            visit[next] = 1;
            queue.push([next, time + 1]);
        }
    }
}

console.log(visit)
console.log(queue)

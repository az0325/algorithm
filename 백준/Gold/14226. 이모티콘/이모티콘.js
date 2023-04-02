let input = require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n");
let [num] = input.shift().split(' ').map(Number);

const arr = [...new Array(1001)].map(() => new Array(1001).fill(0))

function bfs() {
    const stack = [[1, 0, 0]] // [현재위치, 클립보드, 시간]
    arr[1][0] = 1; // (현재위치 : 1, 클립보드 : 0)

    while (stack.length) {
        const [now, clip, time] = stack.shift();

        if (now === num) return time;
        if (0 >= now || now > 1000) continue; // S의 범위는 2<=S<=1000을 가진다.

        if (!arr[now][now]) { // 연산 1. 클립보드에 현재 화면의 이모티콘 수를 저장하기
            arr[now][now] = 1;
            stack.push([now, now, time + 1]);
        }

        if (clip && now + clip <= 1000) { // 연산 2. 클립보드에 있는 이모티콘을 화면에 붙여넣기
            if (!arr[now + clip][clip]) {
                arr[now + clip][clip] = 1;
                stack.push([now + clip, clip, time + 1]);
            }
        }

        if (!arr[now - 1][clip]) { // 연산 3. 화면의 이모티콘 중 한 개 삭제하기
            arr[now - 1][clip] = 1;
            stack.push([now - 1, clip, time + 1]);
        }
    }
}

console.log(bfs())
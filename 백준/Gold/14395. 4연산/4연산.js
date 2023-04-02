let input = require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n");
let array = input.shift().split(' ').map(Number);

const start = array[0]
const end = array[1]

const dir = ['*', '+', '-', '/']
const result = []

const stack = [[start, '']] // [현재위치, 클립보드, 횟수]

const bfs = () => {
    while (stack.length) {
        const [num, res] = stack.shift()

        if (num === end) {
            return res
        }

        for (let i = 0; i < 4; i++) {
            let calc = 0;
            switch (i) {
                case 0:
                    calc = num * num;
                    break;
                case 1:
                    calc = num + num;
                    break;
                case 2:
                    calc = num - num;
                    break;
                case 3:
                    if (num !== 0) calc = num / num;
                    break;
            }

            if (!result.includes(calc)) {
                result.push(calc);
                stack.push([calc, res + dir[i]])
            }
        }
    }

    return -1
}

console.log(start === end ? 0 : bfs())
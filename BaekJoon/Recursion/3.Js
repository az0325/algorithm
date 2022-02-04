// 순열
let depth = 3;
let width = 3;
let arr = []
let mapper = ['A', 'B', 'C']

function re(nowDepth) {
    if (nowDepth === depth) {
        console.log(arr)
        return
    }

    for (let i = nowDepth; i < width; i++) {
        arr[nowDepth] = mapper[i]
        re(nowDepth + 1)
    }
}

re(0);
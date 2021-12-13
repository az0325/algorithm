// 1. 재귀 = 자기자신호출부 + 탈출조건
// function re(i) {
//     if (i === 0) return
//     re(i-1) 
// }

// // 2. 선형
// function sun() {
//     sun() // 자기자신 1번
// }

// // 3. 트리형
// function tree() {
//     // 자기자신 여러번
//     tree()
//     tree()
//     tree()

//     // for (let i=0; i<3; i++)
//     //     tree()
// }

// function fibo(n) {
//     return fibo(n-1)+fibo(n-2)
// }


/*
순열
조합
중복순열
중복조합

= 모든경우의 수
*/

/*
[ 유형 ]
dp
bfs/dfs
그리디
이진탐색
다익스트라
스택/큐
브루트포스(무차별대입)
백트래킹

...

안하는거
구현
정렬
*/

// 중복순열
/*
111
112
113
114
...
777
*/

/*
for()
    for()
        for()
*/

// 재귀
let depth = 3
let width = 3
let arr = []
let mapper = ['a', 'b', 'c']
function re(nowDepth) {
    if (nowDepth === depth) {
        console.log(arr)
        return
    }

    for (let i = 0; i < width; i++) {
        arr[nowDepth] = mapper[i]
        re(nowDepth + 1)
    }
}

re(0)
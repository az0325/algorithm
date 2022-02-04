let depth = 3;
let width = 7;
let arr = []
let mapper = [1, 2, 3, 4, 5, 6, 7]

function re(nowDepth, prevGap) {
    if (nowDepth === depth) {
        console.log(arr)
        return arr;
    }

    for (let i = prevGap; i < width; i++) {
        arr[nowDepth] = mapper[i]
        re(nowDepth + 1, i)
    }
}

re(0, 0)

/*
밍수 진짜 뒤지고싶어?
똥사러 가는거면 말을 하고 가야지
최소 15분인데 이 변비걸려가지고 어휴
밍수 소레기야? 어?
밍수...메이킨큐 먹어....
1도 모르겠자나
출력 아무것도 안된다고

[한거]
중복순열, 중복조합

[할거]
순열, 조합

*/
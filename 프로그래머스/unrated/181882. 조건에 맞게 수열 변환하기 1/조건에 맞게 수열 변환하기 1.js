function solution(arr) {
    // 50보다 크거나 같고 짝수이면 2로 나눔
    // 50보다 작고 홀수면 2를 곱함
    const result = arr.map(item => {
        if(item >= 50) {
            if(item % 2 === 0) return item / 2
        } else {
            if(item % 2 !== 0) return item * 2
        }
        
        return item
    })
    
    return result
}
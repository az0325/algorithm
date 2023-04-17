function solution(n) {
    let result = ''
    for(let i = 1; i <= n; i++){
        result += i % 2 === 0 ? '박' : '수'
    }
    
    return result
}
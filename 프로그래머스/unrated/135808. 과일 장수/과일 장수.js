function solution(k, m, score) {
    let list = score.sort((a, b) => b - a)
    let result = 0
    
    for(let i = m - 1; i < score.length; i += m) {
        result = result + (list[i] * m)
    }
    
    return result
}
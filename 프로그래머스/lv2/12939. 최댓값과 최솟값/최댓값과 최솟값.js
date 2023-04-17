function solution(s) {
    const list = s.split(' ').map(Number)
    const max = Math.max(...list)
    const min = Math.min(...list)
    
    return `${min} ${max}`
}
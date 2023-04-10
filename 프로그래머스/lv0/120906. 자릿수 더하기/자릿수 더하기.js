function solution(n) {
    const list = n.toString().split('')
    const result = list.map(Number).reduce((a, b) => a + b)
    return result
}
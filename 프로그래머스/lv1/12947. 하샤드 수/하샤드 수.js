function solution(x) {
    const list = x.toString().split('').map(Number)
    const sum = list.reduce((a, b) => a + b)
    return x % sum === 0
}
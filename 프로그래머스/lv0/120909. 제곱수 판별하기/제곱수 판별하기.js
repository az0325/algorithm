function solution(n) {
    const result = Math.sqrt(n)
    return Number.isInteger(result) ? 1 : 2
}
function solution(n) {
    const squrt = Math.sqrt(n)
    const isInteger = Number.isInteger(squrt)
    return isInteger ? Math.pow(squrt + 1, 2) : -1
}
function solution(sides) {
    const max = Math.max(...sides)
    const sum = sides.reduce((a, b) => a + b)
    return sum - max > max ? 1 : 2
}
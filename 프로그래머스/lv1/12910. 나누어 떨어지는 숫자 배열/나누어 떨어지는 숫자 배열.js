function solution(arr, divisor) {
    const result = arr.sort((a, b) => a - b).filter(item => item % divisor === 0)
    return result.length ? result : [-1]
}
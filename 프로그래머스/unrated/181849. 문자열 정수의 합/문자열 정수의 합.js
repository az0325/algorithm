function solution(num_str) {
    const result = num_str.split('').map(Number).reduce((a, b) => a + b)
    return result
}
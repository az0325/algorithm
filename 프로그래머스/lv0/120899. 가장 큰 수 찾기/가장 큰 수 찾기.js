function solution(array) {
    const max = Math.max(...array)
    const index = array.findIndex(item => item === max)
    return [max, index]
}
function solution(array, height) {
    const result = array.filter(item => item > height)
    return result.length
}
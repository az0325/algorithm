function solution(array) {
    const string = array.join('')
    const result = string.toString().split('').filter(item => item === '7')
    return result.length
}
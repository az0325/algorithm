function solution(num, k) {
    const result = num.toString().split('').findIndex(item => item === k.toString())
    return result === -1 ? -1 : result + 1
}
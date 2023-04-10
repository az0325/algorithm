function solution(n) {
    const three = n.toString(3).split('').reverse()
    return parseInt(three.join(''), 3)
}
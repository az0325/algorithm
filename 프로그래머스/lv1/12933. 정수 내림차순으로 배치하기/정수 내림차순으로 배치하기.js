function solution(n) {
    const list = n.toString().split('').map(Number).sort((a, b) => b - a)
    return Number(list.join(''))
}
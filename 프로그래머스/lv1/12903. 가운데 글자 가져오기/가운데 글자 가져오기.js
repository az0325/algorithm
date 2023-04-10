function solution(s) {
    const list = s.split('')
    const index = parseInt(list.length / 2)
    if(list.length % 2 === 0) {
        return [list[index - 1], list[index]].join('')
    } else {
        return list[index]
    }
}
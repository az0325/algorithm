function solution(s) {
    const regexr = /[A-Za-z]+/g
    if((s.length !== 4 && s.length !== 6) || s.match(regexr)) return false
    return !isNaN(parseInt(s, 10))
}
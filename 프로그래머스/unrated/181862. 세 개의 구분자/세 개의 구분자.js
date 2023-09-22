function solution(myStr) {
    const result = myStr
    .split('')
    .map(item => item === 'a' || item === 'b' || item === 'c' ? ' ' : item)
    .join('')
    .split(' ')
    .filter(item => !!item)
    return result.length ? result : ['EMPTY']
}
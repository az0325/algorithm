function solution(my_string) {
    const regex = /[a-zA-Z]+/g
    const str = my_string.replaceAll(regex, '!')
    const list = str.split('!').map(Number)
    const sum = list.reduce((a, b) => a + b)
    return sum
}
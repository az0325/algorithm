function solution(my_string) {
    const list = my_string.split('').filter(item => !isNaN(Number(item)))
    const result = list.map((a) => Number(a)).sort((a, b) => a - b)
    return result
}
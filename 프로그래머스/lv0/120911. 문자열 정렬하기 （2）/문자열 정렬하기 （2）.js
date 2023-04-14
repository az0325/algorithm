function solution(my_string) {
    const list = my_string.toLowerCase().split('').sort()
    return list.join('')
}
function solution(my_string, letter) {
    const list = my_string.split('').filter(item => item !== letter)
    return list.join('')
}
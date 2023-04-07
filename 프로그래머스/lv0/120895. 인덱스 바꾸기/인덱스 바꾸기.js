function solution(my_string, num1, num2) {
    const list = my_string.split('')
    const result = JSON.parse(JSON.stringify(list))
    result[num1] = list[num2]
    result[num2] = list[num1]
    
    return result.join('')
}
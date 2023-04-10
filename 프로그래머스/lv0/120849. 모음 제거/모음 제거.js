function solution(my_string) {
    const list = my_string.split('')
    const result = list.filter(item => item !== 'a' && item !== 'e' && item !== 'i' && item !== 'o' && item !== 'u')
    
    return result.join('')
}
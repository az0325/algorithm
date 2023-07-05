function solution(my_string, index_list) {
    let result = ''
    const list = my_string.split('')
    
    index_list.forEach(item => {
         result += list[item]
    })
    
    return result
}
function solution(my_string) {
    const result = my_string.split('').map(item => {
        if(item === item.toUpperCase()) return item.toLowerCase()
        if(item === item.toLowerCase()) return item.toUpperCase()
    })
    
    return result.join('')
}
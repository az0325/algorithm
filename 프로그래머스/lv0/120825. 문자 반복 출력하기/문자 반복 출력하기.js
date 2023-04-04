function solution(my_string, n) {
    const list = my_string.split('')
    const result = []
    list.forEach(item => {
        for(let i = 0; i < n; i++){
            result.push(item)
        }
    })
    
    return result.join('')
}
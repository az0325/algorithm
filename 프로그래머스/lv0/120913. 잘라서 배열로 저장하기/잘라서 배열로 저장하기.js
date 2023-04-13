function solution(my_str, n) {
    let result = []
    let word = my_str
    
    for(let i = 0; i < my_str.length / n; i++){
        const data = word.substring(0, n)
        result.push(data)
        word = word.substring(n)
    }
    
    return result
}
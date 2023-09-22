function solution(names) {
    const result = []
    
    for(let i = 0; i <= 30; i++){
        if(names.length - 1 < i * 5) break
        result.push(names[i * 5])
    }
    
    return result
}
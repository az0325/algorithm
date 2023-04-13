function solution(a, b) {
    let result = 0
    for(let i = 0; i < a.length; i++){
        const sum = a[i] * b[i]
        result = result + sum
    }
    
    return result
}
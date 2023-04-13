function solution(numbers) {
    let result = -Infinity
    
    numbers.forEach((i, index) => {
        numbers.forEach((j, idx) => {
            if(index === idx) return
            result = Math.max(result, i * j)
        })
    })
    
    return result
}
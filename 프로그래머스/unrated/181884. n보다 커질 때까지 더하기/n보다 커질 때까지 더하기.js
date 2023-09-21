function solution(numbers, n) {
    let result = 0
    numbers.some(number => {
        result += number
        return result > n
    })
    
    return result
}
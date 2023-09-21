function solution(num_list) {
    const multiply = num_list.reduce((a, b) =>  a * b)
    const sum = num_list.reduce((a, b) =>  a + b)
    
    return multiply < sum * sum ? 1 : 0
}
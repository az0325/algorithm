function solution(numbers, k) {
    let turn = 1
    let index = 0
    
    while(turn < k) {
        index = index + 2
        
        if(index >= numbers.length) {
            index = index % numbers.length
        }
        
        turn++
    }
    
    return numbers[index]
}
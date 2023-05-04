function solution(number, n, m) {
    for(let i = 0; i < number; i++){
        if(number % n === 0 && number % m === 0) return 1
    }
    
    return 0
}
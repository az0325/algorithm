function solution(n) {
    let result = 1
    
    for(let i = 1; i <= 1000; i++){
        result = result * i
        if(result > n) return i - 1
    }
}
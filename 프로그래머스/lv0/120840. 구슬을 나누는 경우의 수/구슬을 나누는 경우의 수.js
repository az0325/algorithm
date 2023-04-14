function solution(balls, share) {
    if(balls === share) return 1
    
    const first = factorial(balls)
    const second = factorial(balls - share)
    const third = factorial(share)
    
    const result = first / (second * third)
    return Math.round(result);
    
}

function factorial(n){
    if(n === 1) return 1
    return n * factorial(n - 1)
}
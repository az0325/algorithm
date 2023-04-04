function solution(price) {
    let result = price
    if(price >= 100000) result = price * 0.95
    if(price >= 300000) result = price * 0.90
    if(price >= 500000) result = price * 0.80
    
    return Math.floor(result)
}
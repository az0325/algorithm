function solution(a, b) {
    // 제곱 Math.pow()
    // 절대값 Math.abs()
    
    const isAEven = a % 2 === 0
    const isBEven = b % 2 === 0
    
    if(!isAEven  && !isBEven) return  Math.pow(a, 2) +  Math.pow(b, 2)
    if(!isAEven || !isBEven) return 2 * (a + b)
    if(isAEven && isBEven) return Math.abs(a - b)
}
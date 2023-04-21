function solution(sides) {
    let res = 0
    const [num1, num2] = sides.sort((a, b) => a - b)
    
    // 가장 긴변 : num2
    for(let i = 1; i < num2; i++){
       if(i + num1 > num2) res += 1
    }
    
    // 가장 긴변 : num1 + num2
    for(let i = num2; i < num1 + num2; i++){
        res += 1
    }
    
    return res
}
function solution(left, right) {
    // 약수의 갯수가 짝수면 +, 홀수면 -
    let result = 0
    for(let i = left; i <= right; i++){
        const num = findDivisor(i)
        if(num % 2 === 0) result = result + i
        else result = result - i
    }
    
    return result
}

function findDivisor(number){
    const list = []
    for(let i = 1; i <= number; i++){
        if(number % i === 0) list.push(i)
    }
    
    return list.length
}
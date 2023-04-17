function solution(n) {
    let result = 0
    for(let i = 2; i <= n; i++){
        const data = findDivisor(i)
        result = result + data
    }
    
    return result
}


function findDivisor(num){
    const result = []
    for(let i = 2; i <= num; i++){
        if(num % i === 0) result.push(i)
    }

    return result.length > 1 ? 1 : 0
}
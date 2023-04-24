function solution(n, m) {
    const gcd = findGCD(n, m)
    const lcm = findLCM(n, m)
    return [gcd, lcm]
}

// 최대공약수 - 두 수 이상의 여러 수의 공약수 중 최대인 수
function findGCD(num1, num2){
    const num = num1 < num2 ? num1 : num2
    let result = 1
    for(let i = 2; i <= num; i++){
        if(num1 % i === 0 && num2 % i === 0) result = i
    }
    
    return result
}

// 최소공배수 - 두 수에 서로 공통으로 존재하는 배수 중 가장 작은 수
function findLCM(num1, num2){
    let result = 1
    while(true){
        if((result % num1 == 0) && (result % num2 == 0)) break
        result++;
    }
    
    return result
}
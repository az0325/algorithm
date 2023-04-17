function solution(numer1, denom1, numer2, denom2) {
    const denom = denom1 * denom2
    const numer = numer1 * denom2 + numer2 * denom1
    
    let resDenom = denom
    let resNumer = numer
    
    for(let i = 2; i <= Math.max(denom, numer); i++){
        if(denom % i === 0 && numer % i === 0){
            resDenom = denom / i
            resNumer = numer / i
        }
    }
    
    return [resNumer, resDenom]
}
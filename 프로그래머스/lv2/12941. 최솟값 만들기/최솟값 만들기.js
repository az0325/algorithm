function solution(A, B){
    const listA = A.sort((a, b) => a - b)
    const listB = B.sort((a, b) => b - a)
    
    let result = 0
    
    for(let i = 0; i < listA.length; i++){
        result += listA[i] * listB[i]
    }
    
    return result
}
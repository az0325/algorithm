function solution(n) {
    let result = 1
    for(let i = 1; i < n; i++){
        if(7 * i >= n){
            result = i
            break
        }
    }
    
    return result
}
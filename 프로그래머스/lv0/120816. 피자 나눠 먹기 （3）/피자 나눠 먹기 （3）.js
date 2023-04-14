function solution(slice, n) {
    let result = 1
    for(let i = 1; i < n; i++){
        if(slice * i >= n){
            result = i
            break
        }
    }
    
    return result
}
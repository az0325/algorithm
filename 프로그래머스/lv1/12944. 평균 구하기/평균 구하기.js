function solution(arr) {
    let total = 0
    let avg = 0
    
    for (let i = 0; i < arr.length; i++){
        total += arr[i];
        avg = total / arr.length
    }
    
    return avg;
}
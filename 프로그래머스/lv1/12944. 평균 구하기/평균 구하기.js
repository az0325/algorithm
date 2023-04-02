function solution(arr) {
    var total = 0, avg = 0
    for(var i = 0; i < arr.length; i++){
        total += arr[i];
        avg = total / arr.length
    }
    
    return avg;
}
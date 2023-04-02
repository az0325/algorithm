function solution(num) {
    var result = 0
    
    while(true){
        if(num == 1) {
            break
        }
        
        if(num % 2 == 0){
            num = num / 2
            result++
        } else {
            num = num * 3 + 1;
            result++
        }
        
        if(result > 500){
            result = -1
            break
        }
    }
    
    return result;
}
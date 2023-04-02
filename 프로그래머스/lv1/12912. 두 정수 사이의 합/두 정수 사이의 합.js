function solution(a, b) {
    let result = 0
    
    if(a < b){
        for(a; a < b + 1; a++){
            result += a;
        }
    } else {
        for(b; b < a + 1; b++){
            result += b;
        } 
    }
    
    return result;
}
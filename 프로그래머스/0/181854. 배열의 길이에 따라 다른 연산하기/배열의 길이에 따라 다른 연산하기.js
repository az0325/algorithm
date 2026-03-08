function solution(arr, n) {
    var answer = [];
    const isEven = arr.length % 2 === 0
    // 짝수
    if(isEven) {
        return arr.map((item, index) => index % 2 !== 0 ? item + n : item ) 
    }
    
    return arr.map((item, index) => index % 2 === 0 ? item + n : item ) 
}
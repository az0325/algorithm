function solution(n) {
    var answer = [];
    // 2부터 하나씩 나눠보기
    
    let num = 2
    while (num <= n) {
        if(n % num === 0){
            if(!answer.includes(num)) {
                answer.push(num)
            }
            n = n / num
        } else {
            num += 1
        }
    }
    
    return answer;
}
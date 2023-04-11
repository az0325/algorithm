function solution(s1, s2) {
    let result = 0
    s1.forEach(one => {
        s2.forEach(two => {
            if(one === two) result++
        })
    })
    
    return result
}
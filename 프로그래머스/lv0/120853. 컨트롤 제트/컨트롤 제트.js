function solution(s) {
    const list = s.split(' ')
    let result = 0
    
    list.forEach((item, index) => {
        if(item === 'Z' && index > 0) {
            const findItem = list.find((data, idx) => idx === index - 1) // 이전꺼
            result -= Number(findItem)
            return
        } 
        
        result += Number(item)
    })
    
    return result
}
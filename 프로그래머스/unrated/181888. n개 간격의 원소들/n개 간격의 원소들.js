function solution(num_list, n) {
    const result = []
    
    num_list.forEach((item, index) => {
        if(index % n === 0) result.push(item)
    })
    
    return result
}
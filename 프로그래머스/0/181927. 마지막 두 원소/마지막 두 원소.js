function solution(num_list) {
    const answer = num_list
    const lastNum = num_list[num_list.length - 1]
    const prevLastNum = num_list[num_list.length - 2]
    
    if(lastNum > prevLastNum) {
        num_list.push(lastNum - prevLastNum)
    } else {
        num_list.push(lastNum * 2)
    }
    
    return num_list
}
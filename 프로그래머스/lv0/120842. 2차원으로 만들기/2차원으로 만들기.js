function solution(num_list, n) {
    const result = []
    let list = num_list
    
    for(let i = 0; i < num_list.length; i++){
        if(i % n === 0){
            result.push(list.slice(0, n))
            list = list.slice(n)
        }
    }
    
    return result
}

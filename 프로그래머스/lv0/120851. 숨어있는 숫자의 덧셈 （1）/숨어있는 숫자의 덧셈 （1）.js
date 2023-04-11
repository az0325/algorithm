function solution(my_string) {
    const list = my_string.split('')
    let result = 0
    list.forEach(item =>{
        if(isNaN(Number(item))) return
        result = result + Number(item)
    })
    
    return result
}
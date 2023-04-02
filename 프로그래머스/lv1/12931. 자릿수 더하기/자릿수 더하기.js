function solution(n) {
    const list = n.toString().split('')
    let result = 0
    list.forEach(item => {
        result += Number(item)
    })
    
    return result
}
function solution(order) {
    let result = 0
    const list = order.toString().split('').forEach(item => {
        if(Number(item) > 0 && Number(item) % 3 === 0) result = result + 1
    })
    
    return result
}
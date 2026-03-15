function solution(order) {
    // 아메리카노 4500
    // 카페라떼 5000
    const result = order.reduce((prev, curr) => {
        let price = 4500
        if(curr.includes("cafelatte")) {
            price = 5000
        }
        
        return prev + price
    }, 0)
    
    return result
}
function solution(clothes) {
    let obj = {}
    
    clothes.map((item, index) => {
        obj[item[1]] = obj[item[1]] ? obj[item[1]] + 1 : 1
    })
    
    let result = 1
    Object.values(obj).forEach(element => {
        result = result * (element + 1)
    })

    return result - 1;
}
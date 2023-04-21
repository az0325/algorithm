function solution(intStrs, k, s, l) {
    const result = []
    intStrs.forEach(item => {
        const data = item.substr(s, l)
        result.push(data)
    })
    
    const filterData = result.map(Number).filter(item => item > k)
    return filterData
}
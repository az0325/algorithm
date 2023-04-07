function solution(s) {
    const data = {}
    s.split('').sort().forEach(item => {
        if(data[item]) {
            data[item] = data[item] + 1
        } else {
            data[item] = 1
        }
    })
    

    const result = []
    Object.keys(data).forEach(item => {
        if(data[item] === 1) result.push(item)
    })
    
    return result.join('')
}
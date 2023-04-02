function solution(cipher, code) {
    const dataList = cipher.split('')
    const result = []
    
    dataList.forEach((item, index) => {
        if((index + 1) % code === 0) {
            result.push(item)
        }
    })
    
    return result.join('')
}
function solution(rsp) {
    const list = rsp.split('')
    const result = []
    list.forEach(item => {
        if(item === '0') result.push('5')
        if(item === '2') result.push('0')
        if(item === '5') result.push('2')
    })
    
    return result.join('')
}
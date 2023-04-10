function solution(i, j, k) {
    const list = []
    for(let x = i; x <= j; x++) {
        const number = x.toString().split('')
        list.push(...number)
    }
  
    const result = list.map(Number).filter(item => item === k)
    return result.length
}
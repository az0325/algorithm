function solution(i, j, k) {
    let result = 0
    const list = []
    for(let x = i; x <= j; x++) {
        const number = x.toString().split('')
        list.push(...number)
    }
  
    const total = list.map(Number).filter(item => item === k)
    return total.length
}
function solution(n) {
    let num = n
    const base = n.toString(2).split('').filter(item => item === '1')
    let result = []
    
    while(base.length !== result.length){
        const next = Number(num) + 1
        num = next
        result = next.toString(2).split('').filter(item => item === '1')    
    }
    
    return num
}
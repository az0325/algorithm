function solution(A, B) {
    let list = A.split('')
    
    if(A === B) return 0
    let count = 0
    for(let i = 0; i < list.length; i++){
        const last = list.pop()
        list = [last, ...list]
        count += 1
        if(list.join('') === B) return count
    }
    
    return -1
}
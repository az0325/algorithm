function solution(s, n) {
    const alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    
    const list = s.split('')
    const result = []
    list.forEach(item => {
        if(item === ' '){
            result.push(' ')
        } else {
            const findIndex = alpha.findIndex(a => item.toLowerCase() === a)
            const newIndex = (findIndex + n) % alpha.length
            result.push(item == item.toLowerCase() ? alpha[newIndex] : alpha[newIndex].toUpperCase())
        }
    })
    
    return result.join('')
}
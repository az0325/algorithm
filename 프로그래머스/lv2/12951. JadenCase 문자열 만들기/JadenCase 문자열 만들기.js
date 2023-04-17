function solution(s) {
    const list = s.toLowerCase().split(' ')
    const result = list.map(item => {
        const first = item.substr(0, 1)
        return !isNaN(Number(first)) ? item : [...first.toUpperCase(), ...item.substr(1)].join('')
    })
    
    return result.join(' ')
}
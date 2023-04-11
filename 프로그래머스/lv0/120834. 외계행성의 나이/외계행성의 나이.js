function solution(age) {
    const alphabet = 'abcdefghij'.split('')
    const result = []
    age.toString().split('').forEach((item) => {
        alphabet.forEach((alpha, index) => {
            if(Number(index) === Number(item)) result.push(alpha)
        })
    })
    
    return result.join('')
}
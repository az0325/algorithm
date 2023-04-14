function solution(quiz) {
    const result = []
    quiz.forEach(item => {
        const [x, type, y, eq, z] = item.split(' ')
        if(type === '+') result.push(Number(x) + Number(y) === Number(z) ? 'O' : 'X')
        if(type === '-') result.push(Number(x) - Number(y) === Number(z) ? 'O' : 'X')
    })
    
    return result
}
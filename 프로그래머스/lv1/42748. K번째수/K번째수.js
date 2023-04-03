function solution(array, commands) {
    const result = []
    
    commands.forEach(item => {
        const [i, j, k] = item
        const newArray = array
        const getResult = newArray.slice(i - 1, j).sort((a, b) => a - b)
        result.push(getResult[k - 1])
    })
    
    return result
}
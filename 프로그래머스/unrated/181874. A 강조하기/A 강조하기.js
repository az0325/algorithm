function solution(myString) {
    const result = myString.split('').map(item => {
        return item === 'a' ? item.toUpperCase() : item === 'A' ? 
            item : item.toLowerCase()
    })
    
    return result.join('')
}
function solution(babbling) {
    const result = []
    
    const words = ["aya", "ye", "woo", "ma"]
    
    babbling.forEach(item => {
        let data = item
        words.forEach(word => {
            if(data.replace(word, '!').includes('!')) {
                data = data.replaceAll(word, '!')
            }
        })
        
        result.push(data)
    })
    
    return result.filter(item => item.replaceAll('!', '') === '').length
}
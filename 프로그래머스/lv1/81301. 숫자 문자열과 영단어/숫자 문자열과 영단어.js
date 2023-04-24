function solution(s) {
    const word = [
        { number: 0, word: 'zero' },
        { number: 1, word: 'one' },
        { number: 2, word: 'two' },
        { number: 3, word: 'three' },
        { number: 4, word: 'four' },
        { number: 5, word: 'five' },
        { number: 6, word: 'six' },
        { number: 7, word: 'seven' },
        { number: 8, word: 'eight' },
        { number: 9, word: 'nine' }
    ]
    
    let result = s
    word.forEach(item => {
        result = result.replaceAll(item.word, item.number)
    })
    
    return Number(result)
    
}
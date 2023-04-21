function solution(s) {
    let transferCount = 0
    let zeroCount = 0
    let transferLetter = s
    
    while(transferLetter !== '1'){
        const zero = transferLetter.split('').filter(item => item === '0')
        const letter = transferLetter.replaceAll('0', '')
        zeroCount += zero.length
        const nextLetter = letter.length.toString(2)
        transferLetter = nextLetter
        transferCount += 1
    }
    
    return [transferCount, zeroCount]
}
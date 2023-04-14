function solution(numbers) {
    let result = numbers
    const alpha = [
        { text: 'zero', num: '0' },
        { text: 'one', num: '1' },
        { text: 'two', num: '2' },
        { text: 'three', num: '3' },
        { text: 'four', num: '4' },
        { text: 'five', num: '5' },
        { text: 'six', num: '6' },
        { text: 'seven', num: '7' },
        { text: 'eight', num: '8' },
        { text: 'nine', num: '9' }
    ]
    
    alpha.forEach(item => {
        result = result.replaceAll(item.text, item.num)
    })
    
    return Number(result)
}
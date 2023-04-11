function solution(my_string) {
    const list = my_string.split(' ')
    let result = 0
    let operator = '+'
    list.forEach(item => {
        const numbers = Number(item)
        if(isNaN(numbers)) {
            operator = item
            return
        }
        
        result = operator === '+' ? result + numbers : result - numbers
    })
    
    return result
}
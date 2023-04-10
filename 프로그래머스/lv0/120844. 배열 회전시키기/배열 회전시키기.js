function solution(numbers, direction) {
    if(direction === 'left'){
        const data = numbers.shift()
        return [...numbers, data]
    }
    
    if(direction === 'right'){
        const data = numbers.pop()
        return [data, ...numbers]
    }
}
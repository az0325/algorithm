function solution(numbers) {
    const result = []
    const list = numbers.sort((a, b) => a - b)
    for(let i = 0; i < list.length; i++){
        for(let j = 0; j < list.length; j++){
            if(i !== j){
                const sum = list[i] + list[j]
                const findItem = result.filter(item => item === sum)
                if(!findItem.length) result.push(sum)
            }
        }
    }
    
    return result.sort((a, b) => a - b)
}
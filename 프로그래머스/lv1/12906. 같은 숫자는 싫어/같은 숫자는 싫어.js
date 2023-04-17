function solution(arr) {
    const result = [arr[0]]
    
    arr.forEach((item, index) => {
        const lastData = result[result.length - 1]
        if(lastData !== item) result.push(item)
        
    })
    
    return result
}
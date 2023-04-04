function solution(numbers) {
    const list = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
    const sortList = list.filter(item => !numbers.includes(item));
  
    let result = 0
    sortList.forEach(item => {
        result += item
    })
    
    return result
}
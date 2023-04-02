function solution(s){
    let pNum = 0
    let yNum = 0
    
    const dataList = s.toLowerCase().split('')
    dataList.forEach(item => {
        if (item === 'p') pNum++
        if (item === 'y') yNum++
    })
    
    return pNum === yNum
}
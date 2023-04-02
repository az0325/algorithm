function solution(s) {
    const dataList = s.split(' ')
    const resultList = []
    
    for (let i = 0; i < dataList.length; i++){
        const dataResult = dataList[i].split('').map((item, index) => (
            index % 2 === 0 ? item.toUpperCase() : item.toLowerCase()
        ))
        
        resultList.push(dataResult.join(''))
    }
    
    
    return resultList.join(' ')
    
}
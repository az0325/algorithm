function solution(emergency) {
    const sortList = JSON.parse(JSON.stringify(emergency)); // 깊은복사
    const result = [] 
    
    const sorted = sortList.sort((a, b) => b - a)

    emergency.forEach((item) => {
        const idx = sorted.findIndex((em) => em === item)
        result.push(idx + 1)
    })
    
    return result
}
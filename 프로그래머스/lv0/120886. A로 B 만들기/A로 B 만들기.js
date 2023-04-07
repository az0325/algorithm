function solution(before, after) {
     const beforeData = {}
     before.split('').sort().forEach(item => {
        if(beforeData[item]) {
            beforeData[item] = beforeData[item] + 1
        } else {
            beforeData[item] = 1
        }
    })
    
    const afterData = {}
    after.split('').sort().forEach(item => {
        if(afterData[item]) {
            afterData[item] = afterData[item] + 1
        } else {
            afterData[item] = 1
        }
    })
    

    return JSON.stringify(beforeData) === JSON.stringify(afterData) ? 1 : 0
}
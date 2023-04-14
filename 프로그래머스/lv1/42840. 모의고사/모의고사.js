function solution(answers) {
    const first = [1, 2, 3, 4, 5]
    const second = [2, 1, 2, 3, 2, 4, 2, 5]
    const third = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    
    let firstNum = 0
    let secondNum = 0
    let thirdNum = 0
    
    for(let i = 0; i < answers.length; i++){
        if(answers[i] === first[i % first.length]) firstNum += 1
        if(answers[i] === second[i % second.length]) secondNum += 1
        if(answers[i] === third[i % third.length]) thirdNum += 1
    }
    
    const max = Math.max(firstNum, secondNum, thirdNum)
    const result = []
    if(firstNum === max) result.push(1)
    if(secondNum === max) result.push(2)
    if(thirdNum === max) result.push(3)
    
    return result
}
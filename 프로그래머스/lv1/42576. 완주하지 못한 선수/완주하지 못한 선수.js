function solution(participant, completion) {
    participant.sort()
    completion.sort()

    const result = participant.filter((item, index) => {
        if (participant[index] !== completion[index]) {
            return participant[index]
        }
    })
    
    return result[0];
}
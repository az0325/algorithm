const participant = ["marina", "josipa", "nikola", "vinko", "filipa"]
const completion = ["josipa", "filipa", "marina", "nikola"]

participant.sort()
completion.sort()

const result = participant.filter((item, index) => {
    if (participant[index] !== completion[index]) {
        return participant[index]
    }
})

console.log(result)
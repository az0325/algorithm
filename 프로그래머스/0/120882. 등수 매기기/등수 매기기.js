function solution(score) {
    const avg = score.map(([eng, math]) => (eng + math) / 2)
    const sortAvg = [...avg].sort((a, b) => b - a)
    const answer = avg.map(item => sortAvg.indexOf(item) + 1)
    return answer;
}
function solution(binomial) {
    const [a, op, b] = binomial.split(" ")
    console.log({a, op, b})
    if(op === "+") return parseInt(a) + parseInt(b)
    if(op === "-") return parseInt(a) - parseInt(b)
    if(op === "*") return parseInt(a) * parseInt(b)
}
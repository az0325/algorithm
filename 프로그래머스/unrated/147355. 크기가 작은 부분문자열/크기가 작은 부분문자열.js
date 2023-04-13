function solution(t, p) {
    const result = []
    for(let i = 0; i < t.length; i++){
        const data = t.substr(i, p.length)
        if(data.length < p.length) break
        result.push(data)
    }
    
    const data = result.map(Number).filter(item => item <= Number(p))
    return data.length
}
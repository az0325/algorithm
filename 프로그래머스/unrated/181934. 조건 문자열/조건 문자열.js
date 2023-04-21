function solution(ineq, eq, n, m) {
    console.log({ineq, eq, n , m})
    if((ineq === '>' && eq === '=' || ineq === '=' && eq === '>') && n >= m) return 1
    if((ineq === '<' && eq === '=' || ineq === '=' && eq === '<') && n <= m) return 1
    if((ineq === '>' && eq === '!' || ineq === '!' && eq === '>') && n > m) return 1
    if((ineq === '<' && eq === '!' || ineq === '<' && eq === '!') && n < m) return 1
    
    return 0
}
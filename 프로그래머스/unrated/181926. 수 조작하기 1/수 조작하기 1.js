function solution(n, control) {
    // w: +1 / s: -1 / d: +10 / a: -10
    let result = n
    control.split('').forEach(item => {
        if(item === 'w') result += 1
        if(item === 's') result -= 1
        if(item === 'd') result += 10
        if(item === 'a') result -= 10
    })

    return result
}
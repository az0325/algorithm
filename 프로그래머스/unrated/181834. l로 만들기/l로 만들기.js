function solution(myString) {
    // a, b, c, d, e, f, g, h, i, j, k, l, l
    // m, n, o, p, q, r, s, t, u, v, w, x, y, z
    const result = myString.split('').map(item => (
        item === 'a' || item === 'b' || item === 'c' || item === 'd' || item === 'e'
          || item === 'f' || item === 'g' || item === 'h' || item === 'i' || item === 'j'
          || item === 'k' ? 'l' : item
    ))
    
    return result.join('')
}
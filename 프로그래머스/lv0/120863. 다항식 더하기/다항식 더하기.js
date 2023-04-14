function solution(polynomial) {
    const list = polynomial.split('+').map(item => item.trim())
    const poly = list.filter(item => item.includes('x'))
    const num = list.filter(item => !item.includes('x'))
    
    const polyNum = poly.length ? poly.map(item => item.replace('x', '') || '1') : ''
    const polys = polyNum !== '' ? polyNum.map(Number).reduce((a, b) => a + b) : ''
    const nums = num.length ? num.map(Number).reduce((a, b) => a + b) : ''
    
    const resultPoly =  polys !== '' ? polys.toString() === '1' ? 'x' : polys.toString() + 'x' : ''
    const resultNum =  nums !== '' ? nums.toString() : ''
    
    if(resultPoly === '' && resultNum !== '') return resultNum
    if(resultPoly !== '' && resultNum === '') return resultPoly
    
    return resultPoly + ' + ' + resultNum
    
}
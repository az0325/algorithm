function solution(keyinput, board) {
    const [xBoard, yBoard] = board
    const xMax = parseInt(xBoard / 2)
    const yMax = parseInt(yBoard / 2)
    
    const key = { up : [0, 1], down : [0, -1], left : [-1, 0], right : [1, 0] }
    
    let x = 0
    let y = 0
    
    keyinput.forEach(item => {
        const [xKey, yKey] = key[item]
        
        x = Math.abs(x + xKey) > xMax ? x : x + xKey
        y = Math.abs(y + yKey) > yMax ? y : y + yKey
    })
    
    return [x, y]
}
function solution(box, n) {
    const [width, length, height] = box
    const realWidth = parseInt(width / n)
    const realLength = parseInt(length / n)
    const realHeight = parseInt(height / n)
    return realWidth * realLength * realHeight
}
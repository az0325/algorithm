function solution(array, n) {
    const diff = []
    array.forEach(item => {
        diff.push(Math.abs(item - n))
    })

    const filters = diff.filter((item) => item === Math.min(...diff))
    const differ = Math.min(...filters)
    const result = array.sort((a, b) => a - b).find(item => Math.abs(item - n) === differ)
    return result
}
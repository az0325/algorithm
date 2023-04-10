function solution(array) {
    const sortArray = array.sort((a, b) => a - b)
    const index = parseInt(sortArray.length / 2)
    return sortArray[index]
}
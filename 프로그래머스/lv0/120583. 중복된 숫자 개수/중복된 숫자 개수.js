function solution(array, n) {
    const filterList = array.filter(item => item === n)
    return filterList.length
}
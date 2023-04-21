function solution(num_list, n) {
    const findItem = num_list.find(item => item === n)
    return findItem ? 1 : 0
}
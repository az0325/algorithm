function solution(arr, delete_list) {
    const answer = arr.filter(item => !delete_list.includes(item))
    return answer
}
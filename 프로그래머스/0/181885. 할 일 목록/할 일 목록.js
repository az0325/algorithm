function solution(todo_list, finished) {
    const answer = todo_list.filter((item, index) => !finished[index])
    return answer;
}
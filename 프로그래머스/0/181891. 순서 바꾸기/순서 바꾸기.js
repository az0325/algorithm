function solution(num_list, n) {
    const data1 = num_list.slice(0, n)
    const data2 = num_list.slice(n)
    return [...data2, ...data1];
}
function solution(num_list) {
    const odd = num_list.filter(item => item % 2 !== 0).join('')
    const even = num_list.filter(item => item % 2 === 0).join('')
    return Number(odd) + Number(even)
}
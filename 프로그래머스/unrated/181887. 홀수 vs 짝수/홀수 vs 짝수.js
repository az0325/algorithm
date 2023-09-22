function solution(num_list) {
    const even = num_list.filter((item, index) => (index + 1) % 2 === 0).reduce((a, b) => a + b)
    const odd = num_list.filter((item, index) => (index + 1) % 2 !== 0).reduce((a, b) => a + b)
    
    console.log(even, odd)
    
    return even > odd ? even : odd
}
function solution(my_string, s, e) {
    const list = my_string.split('')
    const head = list.slice(0, s).join('')
    const mid = list.slice(s, e + 1).reverse().join('')
    const tail = list.slice(e + 1).join('')
    return head + mid + tail
}
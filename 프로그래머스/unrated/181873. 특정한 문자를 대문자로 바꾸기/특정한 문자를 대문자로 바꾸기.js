function solution(my_string, alp) {
    const result = my_string.replaceAll(alp, alp.toUpperCase())
    return result
}
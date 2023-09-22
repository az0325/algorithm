function solution(my_string, is_prefix) {
    const result = my_string.split(is_prefix)
    return result.length  > 1 && result[0] === '' ? 1 : 0
}
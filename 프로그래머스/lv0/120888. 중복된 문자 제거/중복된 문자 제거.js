function solution(my_string) {
    const set = new Set(my_string.slice(''));
    return Array.from(set).join('')
}
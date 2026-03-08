function solution(my_string, indices) {
    const list = my_string.split("")
    .filter((item, index) => !indices.includes(index)).join("")
    
    return list
}
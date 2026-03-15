function solution(my_strings, parts) {
    const list = []
    
    for (let i = 0; i < my_strings.length; i++) {
        const [start, end] = parts[i]
        list.push(my_strings[i].substring(start, end + 1))
    }
    
    return list.join("")
}
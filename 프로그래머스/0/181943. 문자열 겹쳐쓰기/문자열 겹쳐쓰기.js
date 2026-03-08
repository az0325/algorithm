function solution(my_string, overwrite_string, s) {
    const endIndex = overwrite_string.length
    const head = my_string.split("").slice(0, s).join("")
    const tail = my_string.split("").slice(s + endIndex).join("")
    return head + overwrite_string + tail
}
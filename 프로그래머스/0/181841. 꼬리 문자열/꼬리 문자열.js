function solution(str_list, ex) {
    const filterList = str_list.filter(item => !item.includes(ex))
    return filterList.join("")
}
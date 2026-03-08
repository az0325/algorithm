function solution(strArr) {
    const arr = strArr.filter(item => !item.includes("ad"))
    return arr;
}
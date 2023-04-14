function solution(common) {
    // 무조건 등비수열 아니면 등차수열
    const [first, second, third] = common
    if(second - first  === third - second) { // 등차수열
        const diff = second - first
        return common[common.length - 1] + diff
    } else { // 등비수열 a + (n - 1) * d
        const diff = second / first
        return common[common.length - 1] * diff
    }
}
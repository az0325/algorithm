function solution(money) {
    const result = Math.floor(money / 5500)
    const remain = money % 5500
    return [result, remain]
}
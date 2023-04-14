function solution(hp) {
    // 장군 = 5, 병정 = 3, 일 = 1
    const general = parseInt(hp / 5)
    const soldier = parseInt((hp - (general * 5)) / 3)
    const baby = hp - ((general * 5) + (soldier * 3))
    return general + soldier + baby
}
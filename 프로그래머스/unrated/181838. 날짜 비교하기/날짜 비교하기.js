function solution(date1, date2) {
    const [year1, month1, day1] = date1
    const [year2, month2, day2] = date2
    
    const result1 = new Date(year1, month1 - 1, day1)
    const result2 = new Date(year2, month2 - 1, day2)
    
    return result1 >= result2 ? 0 : 1
}
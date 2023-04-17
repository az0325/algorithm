function solution(a, b) {
    const date = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    const day = ['THU', 'FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED']
    
    const beforeDates = date.slice(0, a).reduce((a, b) => a + b)
    const beforeDay = (beforeDates + b) % day.length
    return day[beforeDay]
}
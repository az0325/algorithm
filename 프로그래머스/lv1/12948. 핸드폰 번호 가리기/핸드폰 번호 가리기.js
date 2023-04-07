function solution(phone_number) {
    const list = phone_number.split('')
    const result = list.map((item, index) => (
        index > list.length - 5 ? item : '*'
    ))
    
    return result.join('')
}
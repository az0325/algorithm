function solution(number) {
    const sum = number.split("").reduce((prev, curr) => prev + parseInt(curr), 0)
    return sum % 9;
}
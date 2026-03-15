function solution(myString, pat) {
    let result = 0
    for(let i = 0; i < myString.length - pat.length + 1; i++) {
        const letter = myString.substring(i, pat.length + i)
        if(letter === pat) {
            result++
        }    
    }
    
    return result
}
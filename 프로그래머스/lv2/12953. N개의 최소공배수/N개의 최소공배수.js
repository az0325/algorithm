function solution(arr) {
    let res = arr[0] * arr[1] / findGCM(arr[0], arr[1]); //최소공배수

    for(let i = 2; i < arr.length; i++){
        const data = findGCM(res, arr[i])
        res = res * arr[i] / data  
    }
    
    return res
    
}

function findGCM(num1, num2){
    const num = num1 > num2 ? num1 : num2
    let result = 1
    for(let i = 2; i <= num; i++){
        if(num1 % i === 0 && num2 % i === 0) result = i
    }
    
    return result
}
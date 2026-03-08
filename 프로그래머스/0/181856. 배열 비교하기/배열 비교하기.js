function solution(arr1, arr2) {
    if(arr1.length === arr2.length) {
        const sum1 = arr1.reduce((prev, curr) => prev + curr, 0)
        const sum2 = arr2.reduce((prev, curr) => prev + curr, 0)
        
        if(sum1 === sum2) return 0
        if(sum1 > sum2) return 1
        if(sum1 < sum2) return -1
    }
    
    if (arr1.length < arr2.length) return -1
    if (arr2.length < arr1.length) return 1
}
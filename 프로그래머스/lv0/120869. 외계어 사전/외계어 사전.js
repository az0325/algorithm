function solution(spell, dic) {
    const result = []
    
    dic.forEach(item => {
        let word = item
        for(let i = 0; i < spell.length; i++){
            if(!word.includes(spell[i])) return
            if(word === '' && i <= spell.length - 1) return
            
            word = word.replaceAll(spell[i], '')
        }
        
        if(word === '') result.push(item)
    })
    
    return !result.length ? 2 : result.length
}
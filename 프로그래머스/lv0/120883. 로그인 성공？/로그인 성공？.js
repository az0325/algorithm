function solution(id_pw, db) {
    const [id, pw] = id_pw
    
    let result = 'fail'
        
    db.forEach(item => {
        const [db_id, db_pw] = item
        
        if (id === db_id) {
            result = pw === db_pw ? 'login' : 'wrong pw'
        }
    })
    
    return result
}
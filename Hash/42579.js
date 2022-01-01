const genres = ["classic", "pop", "classic", "classic", "pop"]
const plays = [500, 600, 150, 800, 2500]

// 1. 속한 노래가 많이 재생된 장르를 먼저 수록합니다.
// 2. 장르 내에서 많이 재생된 노래를 먼저 수록합니다.
// 3. 장르 내에서 재생 횟수가 같은 노래 중에서는 고유 번호가 낮은 노래를 먼저 수록합니다.

let obj = {}

genres.map((item, index) => {
    // 1
    obj[genres[index]] = obj[genres[index]] ? obj[genres[index]] + plays[index] : plays[index]
})

obj.sort((a, b) => { console.log(a, b) })
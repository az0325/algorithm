function solution(rny_string) {
   const result = rny_string.split('').map(item => item === 'm' ? 'rn' : item)
   return result.join('')
}
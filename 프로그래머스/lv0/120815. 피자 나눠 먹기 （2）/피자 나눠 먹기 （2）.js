function solution(n) {
    return n > 1 ? getLCM(6, n) / 6 : 1
}

// 최소 공배수
const getLCM = (num1, num2) =>{
	let lcm = 1;
   
    while(true){
      if((lcm % num1 == 0) && (lcm % num2 == 0)){
        break;
      }
        
      lcm++;
    }
    
  	return lcm
}
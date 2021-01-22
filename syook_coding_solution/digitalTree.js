var s = "12931234567891234567891234567";

function digitalRoot(num){
   let ans = 0; 
	  for (let i=0; i<num.length; i++){ 
        ans = (ans + parseInt(num[i])) % 9;
      }
	if(ans == 0){
    return 9
    
  }
  else{
    return ans % 9;
  }

}

console.log(digitalRoot(s));
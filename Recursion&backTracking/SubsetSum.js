}
function generate_subsequence(s , sum=0 , index,k){
  if(index==s.length){

    return sum==k
    
}
  var x =generate_subsequence(s,sum+s[index],index+1,k)
  if(x==true) return true
  var y=generate_subsequence(s,sum,index+1,k)
  return y
   
}

//https://recursion.vercel.app/  dry run on site
/*
function fn(s , sub , index,k) {
   if(index==s.length){

    return sub==k
    
}
  var x =fn(s,sub+s[index],index+1,k)
  if(x==true) return true
  var y=fn(s,sub,index+1,k)
  return y
   
}

fn([1,2,3],0,i=0,6)

*/

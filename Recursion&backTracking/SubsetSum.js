 generate_subsequence(arr,sum,i=0,K)
  if(ans){
      console.log("yes")
  }else{
      console.log("no")
  }
 
  
    
}
function generate_subsequence(s , sub , index,k){
  if(index==s.length){
    
    return sub==k
    
}
  var x =generate_subsequence(s,sub+s[index],index+1,k)
  if(x==true) return true
  var y=generate_subsequence(s,sub,index+1,k)
  if(y==true) return true
    
   
}

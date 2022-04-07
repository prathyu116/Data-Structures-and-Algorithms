 generate_subsequence(arr,sum,i=0,K)
  if(ans){
      console.log("yes")
  }else{
      console.log("no")
  }
 
  
    
}
function generate_subsequence(s , sub , index,k){
  if(index==s.length){
    
    if(sub==k){
        ans=true
    }
    return
    
}
  generate_subsequence(s,sub+s[index],index+1,k)
  generate_subsequence(s,sub,index+1,k)
    
   
}

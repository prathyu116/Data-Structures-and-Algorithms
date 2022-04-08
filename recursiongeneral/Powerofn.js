/*

*/
function Power(a,b){
  if(b !== 0){
    return a*Power(a,b-1)
  }else{
    return 1
  }
  
}
----------------------------
function poewer(n){
if(n==0) return 1
return 2*power(n-1)
}


function PowerFunctionRecursive(arr){
    var a=arr[0]
    var b=arr[1]
    var ans=1
    for(var i=1;i<=b;i++){
        ans=ans*a
    }
  console.log(ans)
    
}

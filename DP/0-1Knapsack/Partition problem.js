
/*
Following are the two main steps to solve this problem: 
1) Calculate sum of the array. If sum is odd, there can not be two subsets with equal sum, so return false. 
2) If sum of array elements is even, calculate sum/2 and find a subset of array with sum equal to sum/2. 
*/
function ESP(s , sum , index,k){
  if(index==s.length){

    return sum==k
    
}
  var x =ESP(s,sum+s[index],index+1,k)
  if(x==true) return true
  var y=ESP(s,sum,index+1,k)
  return y
   
}

var arr=[1, 5,3]
var sum=0
for(var i=0;i<arr.length;i++){
  sum=sum+arr[i]
}
if(sum%2!==0){
  console.log("No")
}else{
 var ans= ESP(arr,s=0,0,Math.floor(sum/2))
  console.log(ans)
}

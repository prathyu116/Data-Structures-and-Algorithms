/*
TC 2^n
SC=0(n) bcoz of call stack
https://www.youtube.com/watch?v=8s6kRvvXVDo&list=PLrClazTqVpJkZSFk6mRw5e0BOtOG4-7El&index=11
*/

var count=0
function TargetSum(index,arr,sum,target){
 
  
  if(index===arr.length){
    if(sum===target){
       count++
    }
    return
  }


  sum=sum+arr[index]
  TargetSum(index+1,arr,sum,target)
   sum=sum-arr[index]
  
  sum=sum-arr[index]
  TargetSum(index+1,arr,sum,target)
   sum=sum+arr[index]
  
}

TargetSum(0,[1,1,1,1,1],0,3)
console.log(count)

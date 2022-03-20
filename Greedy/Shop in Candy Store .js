/*
https://practice.geeksforgeeks.org/problems/shop-in-candy-store1145/1

*/



function ShopCandy(arr,n,k){
  arr.sort((a,b)=>a-b)
  sum1=0
  for(var i=0;i<n-k;i++){
    sum1=sum1+arr[i]
  }
  console.log(sum1)//min cost
  
  arr.sort((a,b)=>b-a)
  sum=0
  for(var i=0;i<n-k;i++){
    sum=sum+arr[i]
  }
  console.log(sum)//maxcost
}




N = 5
K = 4
var candies = [3 ,2 ,1, 4,5]

  ShopCandy(candies,N,K)

function Takeoutmaximum(N,k,arr){
    
     var max=-999999999999999999
     var sum=0
     var i=0
     var j=0
    while(j<N){
      sum=sum+arr[j]
      if(j-i+1 < k){
        j++
      }else if(j-i+1 == k){
        max=Math.max(max,sum)
        sum=sum-arr[i]
        j++
        i++
      }
    }
    console.log(max)
    
}
var s=10,k= 3
var arr=[-1 ,-1, -2, 1, -2, 4 ,1 ,9 ,3 ,9]
Takeoutmaximum(s,k,arr)





function Takeoutmaximum(N,k,arr){
    
     var max=-999999999999999999
     var sum=0
     for(var i=0;i<k;i++){
         sum += arr[i]
        
     }
    max=Math.max(sum,max)
     for(var i=k;i<N;i++){
         sum=sum+arr[i]
         sum=sum-arr[i-k]
         max=Math.max(sum,max)
     }
     console.log(max)
    
}

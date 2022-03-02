function Takeoutmaximum(N,k,arr){
    
     var max=-999999999999999999
     var sum=0
     for(var i=0;i<k;i++){
         sum += arr[i]
        
     }
      if(sum > max){
             max=sum
         }
     for(var i=k;i<N;i++){
         sum=sum+arr[i]
         sum=sum-arr[i-k]
         if(sum > max) max=sum
     }
     console.log(max)
    
}
var s=10,k= 3
var arr=[-1 ,-1, -2, 1, -2, 4 ,1 ,9 ,3 ,9]
Takeoutmaximum(s,k,arr)

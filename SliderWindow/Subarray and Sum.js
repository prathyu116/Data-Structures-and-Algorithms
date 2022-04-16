function SubarrayandSum(N,K,arr){
    var left = -1
    var right = -1
    sum = 0;
    for (i = 0;i<N;i++){
        sum=sum+arr[i]
        if (arr[i] % K != 0){
            if (left == -1) left = i
            right = i
        }
    }
   var window_size=0
    if (sum % K != 0){
        window_size=N
        console.log("1")
        return
    } 
    if (left == -1){
        window_size=0
        return
    } 
    var left_window_size = N - (left+1)
    var no_of_element_remove_right = N-right
    var right_window_size = N - no_of_element_remove_right
     window_size=Math.max( left_window_size,right_window_size)
 
 //finding count
     var count=0
     var sum2=0
     for(var i=0;i<window_size;i++){
         sum2 += arr[i]
         }
         if(sum2%K != 0){
             count++
         }
    
     for(var i=window_size;i<N;i++){
         sum2=sum2+arr[i]
         sum2=sum-arr[i-window_size]

     }
      if(sum2%K != 0){
             count++
         }
     
   
         console.log(count)
     
}
 

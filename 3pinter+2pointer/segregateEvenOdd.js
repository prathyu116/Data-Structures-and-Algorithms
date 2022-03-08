//order may change
 
function segregateEvenOdd(arr)
{
    /* Initialize left and right indexes */
       var left = 0, right = arr.length - 1;
    while (left < right)
    {
        /* Increment left index while
           we see 0 at left */
        while (arr[left]%2 == 0 && left < right)
            left++;
 
        /* Decrement right index while we see
           1 at right */
        while (arr[right]%2 == 1 && left < right)
            right--;
 
        if (left < right)
        {
            /* Swap arr[left] and arr[right]*/
            var temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
            left++;
            right--;
        }
    }
}



// if need oorde
function seperationOfOddEven(N, arr,Q) {
  //write code here
  var temp=[],temp2=[]
 for(var i=0;i<N;i++){
  if(Q==1){
         if(arr[i]%2==0){
        temp.push(arr[i])
     }else if(arr[i]%2==1){
         temp2.push(arr[i])
     }
  }
  if(Q==2){
         if(arr[i]%2==1){
        temp.push(arr[i])
     }else if(arr[i]%2==0){
         temp2.push(arr[i])
     }
  }
 }
 console.log(...temp,...temp2)
}

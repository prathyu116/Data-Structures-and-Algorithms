function printArray(index,arr){
    //write your recursive code here
   if (index == arr.length-1){
       return (arr[index]);
   }else{
       return (arr[index] * printArray(index+1, arr));
   }
            

  
    
}

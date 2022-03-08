var arr=[1,1,0,0,0,0,1,0]
var left=0;
var temp
var right=arr.length-1;
while(left<right){
 while(arr[left]==0 && left<right ){
   left++
 }
 while(arr[right]==1  && left<right){
   right--
 }
 if(arr[right]==0 && arr[left]==1  ){
      temp=arr[left]
   arr[left]=arr[right]
   arr[right]=temp
   left++
   right--
 }
 
}
 console.log(arr)

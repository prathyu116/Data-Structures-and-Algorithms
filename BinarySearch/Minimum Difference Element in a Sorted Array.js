/*
Input: a[] = [2, 5, 10, 12, 15], target = 8
Output: 10
https://www.callicoder.com/minimum-difference-element-in-sorted-array/
https://www.youtube.com/watch?v=3RhGdmoF_ac&list=PL_z_8CaSLPWeYfhtuKHj-9MpYb6XQJ_f2&index=15


*/




function BinarySearch(arr,key){

    var start=0,end=arr.length-1
   
   if (key < arr[0])
            return arr[0];
   if (key > arr[arr.length - 1])
            return arr[arr.length - 1];
  
    while(start<=end){
        var mid=Math.floor(start+(end-start)/2)

        if(arr[mid]==key) {
            return arr[mid]
        }else if(key > arr[mid]){
            start=mid+1
        }else if(key < arr[mid]){
            end=mid-1
        }
    }
  //condition false aayal neighbourse element kittum
  var n1=Math.abs(arr[start]-key)
  var n2=Math.abs(arr[end]-key)
 if(n1 > n2){
       return arr[end]

 }else{
    return arr[start]
 }
}
var arr=[2, 5, 10, 12, 15]
var ans = BinarySearch(arr,20)
console.log(ans)

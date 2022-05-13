function mergeSort(arr,low,high){
  if(low==high) return //loww==high avunnath oru elemnt varumbozhanu...apppozhanu merge cheyyunnea
  var mid = Math.floor((low+high)/2)
  mergeSort(arr,low,mid)//2 array kittum once upto mid anothor mid+1 to end
  mergeSort(arr,mid+1,high)
  merge(arr,low,mid,high)
}





function merge(arr,low,mid,high) {
  var arr1=[]
  var arr2=[]
  for(var i=low;i<=mid;i++){
    arr1.push(arr[i])
    
  }
  for(var i=mid+1;i<=high;i++){
        arr2.push(arr[i])
  }
  var i = 0; var j = 0, index = low;
  var ans = []
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      arr[index] = arr1[i]
      i++;
    } else {
      arr[index] = arr2[j]
      j++;
    }
    index++

  }
  while (i < arr1.length) {
    arr[index] = arr1[i]
    i++;
    index++

  }
  while (j < arr2.length) {
    arr[index] = arr2[j]
    j++;
    index++
  }
}


**Time Complexity:-**

T(n) : represents time taken to sort n numbers.

T(n) =  2T(n/2) + n        if n>1

      1                         if n==1

if you solve above equation by using back substitution we will get **O(nlogn)** 

**Space Complexity:-**

Merge sort uses extra array of size n. So the Space Complexity is **O(n)**

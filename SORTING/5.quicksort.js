/*
finding out the proper place for a pivot elemnt..that is we have an array...we pic a one elemnt which is called PIVOT elemnt
how to find the correct place for that pivot element ?  right side of pivot elemnt should greater than pivot,and left is lessthan or equalt to pivot

when we found the correct place for pivot elemnt ..left side full greater right side full small or equal ...so that we got 2 part
->then we only focus on left part,,,chose a pivot

*/




function QS(arr,high,low){
  if(low >= high){
    return
  }
  index = Partition(arr,low,high)
  QS(arr,low,index-1)
  QS(arr,index+1,high)
}




function Partition(arr,low,high){
  var i=low
  var j=high
  var pivot = arr[low]
  while(i<j){
    while(arr[i]<=pivot && i<high){
      i++
    }
    while(arr[j]>pivot && i>low){
      j--
    }
    if(i<j){
      swap(arr[i],arr[j])
    }
  }
  swap(pivot,j);
  return j
}



**Time complexity:-**

T(n)  represents, sorting n elements 

T(n)   =  n + T(n-1)       if n>1

              1                     if n==1

// if you solve above equation by using back substitution we can get it as **O(n^2)**

// **Space complexity:-**

// It does not use any extra array to sort. but at worst we may require a stack of size n, to store all function calls, so the space complexity of quicksort was **O(n).**

// **Some more points on quick sort:-**

// - It is in place sorting algorithm
// - It is not stable sorting algorithm
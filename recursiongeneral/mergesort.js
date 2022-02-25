
//spacecomplexity = 0(n)
//timecomplexity = 0(nlogn) 

function mergeSort(arr,low,high){
  if(low==high) return
  var mid = Math.floor((low+high)/2)
  mergeSort(arr,low,mid)
  mergeSort(arr,mid+1,high)
  merge(arr,low,mid,high)
}




function merge(arr,low,mid,high) { //mergin one sized array
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




var arr=[10,2,3,4,5]

mergeSort(arr,0,arr.length-1)
console.log(arr.join(" "))

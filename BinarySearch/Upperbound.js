//TC O(log n)
//UPPERBOUND or CEIL----> arr[i] > key(Just >than key )
//upper bound means the smallest index such that ..that number >= target
function upperBound(arr,key) {
  var start = 0, end = arr.length - 1, UpperIndex = -1
  while (start <= end) {
    var mid = Math.floor(start + (end - start) / 2)

    if (arr[mid] <= key) {
      
      start = mid + 1
    } else {
      UpperIndex=mid
      end=mid-1
    } 
  }

  return UpperIndex
}
var key = 3
var arr = [0 ,2 ,4 ,4, 5, 5 ,7 ,7 ,9 ,10]

var ans = upperBound(arr,key)
console.log(ans)

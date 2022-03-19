/*Input : arr[] = {1, 2, 8, 10, 10, 12, 19}, x = 5
Output : 2
2 is the largest element in arr[] smaller than 5.

floor->greatestElemnt smallerthan 5

*/




function floor(arr, key) {
  var start = 0, end = arr.length - 1, index = -1
  while (start <= end) {
    var mid = Math.floor(start + (end - start) / 2)

    if (arr[mid] <= key) {
      index = mid

      start = mid + 1
    } else {
      end = mid - 1
    }
  }

  return index
}
var key = 5
var arr = [1, 2, 4, 8, 10, 12, 19]

var ans = floor(arr, key)
console.log(ans)

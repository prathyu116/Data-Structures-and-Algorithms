
//https://replit.com/@PrathyuPrasad/UnripeDarkmagentaLightweightprocess#in.js
//1.get pivot value
//2.search based on pivot

function Pivot(n, arr) {
  var s = 0; var e = n - 1;

  while (s < e) {
    var mid = (s + e) / 2;

    if (arr[mid] > arr[0]) {
      s = mid + 1;
    } else {
      e = mid;
    }
  }
  return s;
}


function BinarySearch(arr, s, e, key) {

  var start = s, end = e
  while (start <= end) {
    var mid = Math.floor(start + (end - start) / 2)

    if (arr[mid] == key) {
      return true
    } else if (key > arr[mid]) {
      start = mid + 1
    } else if (key < arr[mid]) {
      end = mid - 1
    }
  }

  return false
}




var arr = [8, 10, 17, 1, 3]
var k = 4
var pivot = Pivot(arr.length, arr)
if (k >= arr[pivot] && k <= arr[arr.length - 1]) {
  var ans = BinarySearch(arr, pivot, arr.length - 1, k)
  console.log(ans)

} else {
  var ans = BinarySearch(arr, 0, pivot - 1, k)
  console.log(ans)
}

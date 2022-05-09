



function reverse(arr, l, r) {
if(l>=r) {
  return 
}
  var temp = arr[l]
  arr[l] = arr[r]
  arr[r] = temp
  reverse(arr,l+1,r-1)
}

var arr = [1, 2, 3, 4, 5]
var l = 0
var r = arr.length - 1
var ans = reverse(arr, l, r)
console.log(arr)

u can do palindrome also

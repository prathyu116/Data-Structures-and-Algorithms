
function maxOne(arr) {
  var count = 0
  var maxi = 0
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      count++
    } else {
      count = 0
    }
    maxi = Math.max(count, maxi)
  }
  return maxi
}
var ans=maxOne([1, 1, 0, 0, 1, 1, 1])
console.log(ans)

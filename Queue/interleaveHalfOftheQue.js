//var arr = [11, 12, 13, 14, 15, 16, 17, 18]
//o/p-->var arr = [11, 12, 13, 14, 15, 16, 17, 18]
//half find



var arr = [11, 12, 13, 14, 15, 16, 17, 18]
var mid = Math.floor((0 + arr.length - 1) / 2)
rev(arr, mid)
function rev(arr, mid) {
  var newQ = []
  for (var i = 0; i <= mid; i++) {
    var val = arr[0]
    arr.shift()
    newQ.push(val)
  }
  while (newQ.length != 0) {
    var newQval = newQ[0]
    newQ.shift()
    arr.push(newQval)
    var arrval = arr[0]
    arr.shift()
    arr.push(arrval)
  }
  console.log(arr)

}

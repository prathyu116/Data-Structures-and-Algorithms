//push all negative number in window size k into list
//push to first elemtn of list to arr2


function FirstNegative(N, k, arr) {
  var list = []
  var arr2 = []

  var i = 0
  var j = 0
  while (j < arr.length) {
    if (arr[j] < 0) {
      list.push(arr[j])
    }
    
    if (j - i + 1 < k) {
      j++
    }
    else if (j - i + 1 == k) {
      if (list.length != 0) {
        arr2.push(list[0])
        if (arr[i] == list[0]) {
             list.shift()
        }

      } else {
        arr2.push(0)

      }
      i++
      j++

    }


  }
  console.log(arr2)


}
var s = 5, k = 2
var arr = [-8, 2, 3, -6, 10]

FirstNegative(s, k, arr)


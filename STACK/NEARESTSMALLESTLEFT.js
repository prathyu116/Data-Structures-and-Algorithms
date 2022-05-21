/*
8
39 27 11 4 24 32 32 1

o/p=>-1 -1 -1 -1 4 24 24 -1
*/
function NSL(n, arr) {
  var stack = []
  var ans = []
  for (var i = 0; i < arr.length; i++) {
    while (stack.length != 0 && stack[stack.length - 1] >= arr[i]) {
      stack.pop()
    }
    if (stack.length == 0) {
      ans.push(-1)
    } else {
      ans.push(stack[stack.length - 1])
    }
    stack.push(arr[i])
  }
  console.log(ans.join(" "))
}


var arrr = [4,5,2,10,8]
var s = arrr.length
NSL(s, arrr)

------------------------------------------NEAREST GREATEST LEFT--------------------------------------------------------------
function NGL(n, arr) {
  var stack = []
  var ans = []
  for (var i = 0; i < n; i++) {
    while (stack.length != 0 && stack[stack.length - 1] <= arr[i]) {
      stack.pop()
    }
    if (stack.length == 0) {
      ans.push(-1)
    } else {
      ans.push(stack[stack.length - 1])
    }
    stack.push(arr[i])
  }
  console.log(ans.join(" "))
}


var arrr = [1,3,2,4]
var s = arrr.length
NGL(s, arrr)

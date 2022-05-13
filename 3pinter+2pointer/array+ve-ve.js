var arr = [-5, -4, -2, 0, 1]
var ans = []
var L = 0, R = arr.length - 1
for (var i = arr.length - 1; i >= 0; i--) {
  if (arr[L] * arr[L] < arr[R] * arr[R]) {
    ans[i] = arr[R] * arr[R]
    R--
  } else {
    ans[i] = arr[L] * arr[L]

    L++
  }
}
console.log(ans)

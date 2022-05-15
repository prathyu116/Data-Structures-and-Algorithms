function subsequnce(index, sum, arr) {
  if (index === arr.length) {
    if (sum === 3) {
      return 1
    } else {
      return 0
    }

  }
  sum = sum + arr[index]
  var T = subsequnce(index + 1, sum, arr)
  sum = sum - arr[index]

  var notT = subsequnce(index + 1, sum, arr)//not taking
  return T + notT
}

var ans = subsequnce(0, sum = 0, [1, 2, 3])
console.log(ans)


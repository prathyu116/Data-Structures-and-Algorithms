var arr = [1, 2, 2, 1, 1, 3]
var obj = {}
var unique = new Set
function k(arr,n) {
  for (var n of arr) obj[n] = obj[n] + 1 || 1
  for (key in obj) {
    count = obj[key]
    if (unique.has(count)) return "No"
    unique.add(count)
  }
  return "Yes"
}
var ans = k(arr,arr.length)
console.log(ans)

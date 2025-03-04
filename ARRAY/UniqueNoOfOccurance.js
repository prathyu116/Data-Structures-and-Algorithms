var arr = [1, 2, 2, 1, 1, 3]
var obj = {}
var unique = new Set
function k(arr, n) {
    for (var n of arr) obj[n] = obj[n] + 1 || 1
    for (let key in obj) {
       let count = obj[key]
        if (unique.has(count)) return "No"
        unique.add(count)
    }
    console.log("unique", unique    )
    return "Yes"
}
var ans = k(arr, arr.length)
console.log(ans)

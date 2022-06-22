function subsequnce(index, list,k ,arr) {
  if (index === arr.length) {
    if (list.length >= k) {
      let hs = new Set();

      for (let i = 0; i < list.length; i++) {
        hs.add(list[i]);
      }
      if (hs.size == 1) {
        return true
      }
    }

    return false
  }
  list.push(arr[index])
  if (subsequnce(index + 1, list,k, arr)) {
    return true
  }
  list.pop()

  if (subsequnce(index + 1, list, k,arr)) return true//not taking
  return false
}

var ans = subsequnce(0, [],k=5, [28 ,27, 29, 28, 25])
console.log(ans)

..in this we avoide future reciursion call


function subsequnce(index, list, sum, arr) {
  if (index === arr.length) {
    if (sum === 3) { //here 3 is target
          console.log(list)

      return true

    }
    return false
  }
  list.push(arr[index])
  sum=sum+arr[index]
  if(subsequnce(index + 1, list,sum, arr)){
    return true
  }
  list.pop()
  sum=sum-arr[index]

 if( subsequnce(index + 1, list,sum, arr)) return true //not taking

 return false
}

var ans = subsequnce(0, [], sum = 0, [1, 2, 3])
console.log(ans)

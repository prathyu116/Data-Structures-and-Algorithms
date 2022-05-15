function subsequnce(index, list, sum, arr) {
  if (index === arr.length) {
    if (sum === 3) {
      console.log(list)

    }
    return
  }
  list.push(arr[index])
  sum=sum+arr[index]
  subsequnce(index + 1, list,sum, arr)
  list.pop()
  sum=sum-arr[index]

  subsequnce(index + 1, list,sum, arr)//not taking
}

subsequnce(0, [], sum = 0, [1, 2, 3])

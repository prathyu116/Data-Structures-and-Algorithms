function largetSubArraySumK(k, arr) {
  var max = -99999999999999
  var sum = 0, i = 0, j = 0
  while (i < arr.length) {
    sum = sum + arr[i]
    if (sum < k) {
      i++
    }else if(sum===k){
      max=Math.max(max,i-j+1)
      i++
    }else if(sum > k){
      while(sum > k){
        sum=sum-arr[j]
        j++
      }
      i++
    }
  }
  return max
}
var sum = 5;
var arr = [4, 1, 1, 1, 2, 3, 5];
var ans = largetSubArraySumK(sum, arr);
console.log(ans)

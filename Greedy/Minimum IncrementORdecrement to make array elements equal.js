function min_Ops(arr, n) {
  var res = 999999999;
  for (var i = 0; i < n; i++) {
    curr_res = 0;
    for (var j = 0; j < n; j++) {
      curr_res = curr_res + Math.abs(arr[i] - arr[j]);
    }
    res = Math.min(res, curr_res);
  }
  return res;
}
var arr = [1, 5, 7, 10]
console.log(min_Ops(arr, arr.length))


---------------on
Algorithm
Step 1:Sort the array.
Step 2:Find the median of the array.If the array is of odd length, only one median is obtained.If the array is of even length, we obtain 2 medians.
Step 3:Now, start traversing the array, and add the absolute difference of the median and arr[i] to the sum.For even length arrays, repeat this step for both the medians.
Step 4:After reaching the end of the array,we return the minimum sum.
function minCost(A, n) {
  var cost = 0;
  A.sort((a, b) => a - b);
  var K = A[parseInt(n / 2)];
  var i;
  for (i = 0; i < n; ++i)
    cost += Math.abs(A[i] - K);
  if (n % 2 == 0) {
    var tempCost = 0;

    K = A[parseInt(n / 2) - 1];
    for (i = 0; i < n; ++i)
      tempCost += Math.abs(A[i] - K);
    cost = Math.min(cost, tempCost);
  }

  return cost;
}
var arr = [2, 5, 7, 9, 10]
console.log(minCost(arr, arr.length))

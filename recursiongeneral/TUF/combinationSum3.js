/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 https://leetcode.com/problems/combination-sum-iii/submissions/
 */
 Input: k = 3, n = 9
Output: [[1,2,6],[1,3,5],[2,3,4]]
Explanation:
1 + 2 + 6 = 9
1 + 3 + 5 = 9
2 + 3 + 4 = 9
There are no other valid combinations.



var combinationSum3 = function (k, n) {
  var ans = [];
  var arr = [];
  
  for (var i = 1; i <= 9; i++) {
    arr.push(i);
  }

  function ANS(i, arr, k, n, list) {
    if (n < 0) return;
    if (list.length === k) {
      if (n === 0) {
        ans.push(list.slice());
      }
      return;
    }
    for (var j = i; j < arr.length; j++) {
      list.push(arr[j]);
      ANS(j + 1, arr, k, n - arr[j], list);
      list.pop();
    }
  }
  ANS(0, arr, k, n, []);
  return ans;
};

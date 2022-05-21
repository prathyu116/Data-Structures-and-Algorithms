https://leetcode.com/problems/next-greater-element-i/submissions/
Input: nums1 = [4,1,2], nums2 = [1,3,4,2]
Output: [-1,3,-1]
var nextGreaterElement = function(nums1, nums2) {
    const result = [];
    for (let i = 0; i < nums1.length; i++) {
        let gn = -1, isEqual = false;
        for (let j = 0; j < nums2.length; j++) {
            if (nums2[j] === nums1[i]) {
                isEqual = true;
            }
            if (isEqual && nums2[j] > nums1[i]) {
                gn = nums2[j];
                break;
            }
        }
        result.push(gn);
    }
    return result;
};
--------------------------------------------------
function NGR(n, arr) {
  var stack = []
  var ans = []
  for (var i = n-1; i >=0; i--) {
    while (stack.length != 0 && stack[stack.length - 1] <= arr[i]) {
      stack.pop()
    }
    if (stack.length == 0) {
      ans.push(-1)
    } else {
      ans.push(stack[stack.length - 1])
    }
    stack.push(arr[i])
  }
  console.log(ans.reverse().join(" "))
}


var arrr = [4,5,2,10,8]
var s = arrr.length
NGR(s, arrr)



------------------------------------------------NEXT GREATEST CIRCULAR-------------------------------------------------
    function NGCIRCULAR(n, arr) {
  var stack = []
  var ans = []
  for (var i = 2 * n - 1; i >= 0; i--) {
    while (stack.length != 0 && stack[stack.length - 1] <= arr[i % n]) {
      stack.pop();
    }

    if (i < n) {
      if (stack.length == 0) {
        ans.push(-1)
      } else {
        ans.push(stack[stack.length - 1])
      }
    }
    stack.push(arr[i % n])
  }
  console.log(ans.reverse())
}


var arrr = [2,10,12,1,11] //[2,10,12,1,11] total 9 ele ulla array akkum  ...5th index nte value 2 nn kiitum...how ? 5%5..and for 6th index 6%5
var s = arrr.length
NGCIRCULAR(s, arrr)




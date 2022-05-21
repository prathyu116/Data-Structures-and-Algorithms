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

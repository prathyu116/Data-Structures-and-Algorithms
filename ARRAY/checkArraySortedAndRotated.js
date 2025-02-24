/**
 * @param {number[]} nums
 * @return {boolean}
 identify pattern
 */

var check = function(nums) {

    let n = nums.length;
        let count = 0;

        if (nums[0] < nums[n - 1]) {
            count++;
        }

        for (let i = 0; i < n - 1; i++) {
            if (nums[i] > nums[i + 1]) {
                count++;
            }
            if (count > 1) {
                return false;
            }
        }

        return true;
    
};

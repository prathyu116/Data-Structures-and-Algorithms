var findMin = function(nums) {
    let start = 0;
    let end = nums.length - 1;
    let min = Infinity;
    
    while (start <= end) {
        const mid = Math.floor(start + (end - start) / 2);
        
        if (nums[mid] < min) min = nums[mid];

        if (nums[start] >= nums[end] && nums[mid] >= nums[start]) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return min;
};

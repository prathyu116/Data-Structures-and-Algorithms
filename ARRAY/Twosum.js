/**
 Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
 */
var twoSum = function(nums, target) {
    let obj = {}
    for (i=0;i<nums.length;i++){
        let diff = target-nums[i]
        if(obj[diff] != null){
            return [obj[diff],i]
        }else{
            obj[nums[i]] = i
        }
    }
};
https://oj.masaischool.com/contest/2749/problem/01
//search in object time complexity O(1)

/**
sorted anenkil 2 pointer edkkum
allenkil obj method bcoz===
2+7=9 

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

Approach: We can solve this problem efficiently by using hashing. We’ll use a hash-map to see if there’s a value target – i that can be added to the current array value i to get the sum equals to target. 
If target – i is found in the map, we return the current index, and index stored at target – nums[index] location in the map. 

This can be done in constant time.

Dry Run: Given array, nums = [2,3,1,4], target = 4

For index 0, i = 2

We try to find if target – i = 4 – 2 = 2 is present in the map. It is not present in this case, so we put 0 for key 2 in the map.

For index 1, i = 3

We try to find if target – i = 4  – 3 = 1 is present in the map. We find that it is also not present, so we put 1 for key 3 in the map.

For index 2, i = 1 

We try to find if target – i = 4  – 1 = 3 is present in the map. We find that it is present, so we store index 2 and value stored for key 3 in the map, and break the loop.

And return [1,2].

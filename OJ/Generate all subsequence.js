var subarraySum = function(nums) {
    
    for(var start = 0; start<nums.length;start++){
        let bag = "";
        for(var end = start; end < nums.length; end++){
            bag+=nums[end];
          console.log(bag)
        }
            

           
    }
    // return count;
    
};
var arr=[1,2,3]
subarraySum(arr)

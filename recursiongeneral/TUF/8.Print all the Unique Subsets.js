https://takeuforward.org/data-structure/subset-ii-print-all-the-unique-subsets/



/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    var global=[]
    nums.sort((a,b)=>a-b)
    const ANS = (index,arr,list) =>{
        if(index===arr.length){
            global.push(list.slice())
            return
        }
        
        ANS(index+1,arr,list) //ex
        
        list.push(arr[index])
        ANS(index+1,arr,list)
        list.pop()
    }
    ANS(0,nums,[])
    const obj = {}
    for(ele of global){
        if(obj[ele]) continue
        else obj[ele]=ele
    }    
    return Object.values(obj)
};

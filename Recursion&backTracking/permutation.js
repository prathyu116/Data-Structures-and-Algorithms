//https://www.youtube.com/watch?v=4FdPoW4Qzb4&list=PLrClazTqVpJkZSFk6mRw5e0BOtOG4-7El&index=4
function GeneratePermutations(arr,curr){
    if(curr==arr.length){
     console.log(arr)
        return
    }
    
    for(var i=curr;i<arr.length;i++){
       let temp = arr[i];
         arr[i] = arr[curr]
         arr[curr] = temp
        GeneratePermutations(arr,curr+1)
         temp = arr[i];
         arr[i] = arr[curr]
         arr[curr] = temp
 
        
    }
 }
 
 let arr=[1,2,3]
 let curr=0
 
  GeneratePermutations(arr,curr)

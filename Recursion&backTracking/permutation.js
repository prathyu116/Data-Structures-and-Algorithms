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
------------------------------------------TUF-----------------------------
    //https://takeuforward.org/data-structure/print-all-permutations-of-a-string-array/
    function GeneratePermutations(arr,list,freq){
    if(list.length==arr.length){
     console.log(list)
        return
    }
    for(var i=0;i<arr.length;i++){
      if(freq[i]===0){
        freq[i]=1
        list.push(arr[i])
        GeneratePermutations(arr,list,freq)
         freq[i]=0
        list.pop()
      }  
    }
 }
 
 let arr=[1,2,3]
let freq= new Array(arr.length).fill(0)
 let list=[]
 
  GeneratePermutations(arr,list,freq)

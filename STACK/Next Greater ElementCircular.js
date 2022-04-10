function SmallerNeighbourElement(n,arr){
 var stack=[]
 var ans=[]
     for (var i =2* n - 1; i >= 0; i--) {
        while (stack.length !=0 && stack[stack.length-1]  <= arr[i%n]) {
          stack.pop();
        }

    if(i<n){
         if(stack.length==0){
         ans.push(-1)
     }else{
         ans.push(stack[stack.length-1])
     }
    }
     stack.push(arr[i%n])
      }
 console.log(ans)
}
   

   var arrr=[5,7,1,2,6,0]   // 0/p [ 5, 7, 6, 2, -1, 7 ] reverse this array
   var s=6
   SmallerNeighbourElement(s,arrr)
   
   
   
   /*
   Time Complexity: O(N)

Space Complexity: O(N)
   */

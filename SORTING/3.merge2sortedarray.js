function PerformMerging(N,arr1,arr2) {
   var i=0; var j=0,index=0;
    var ans=[]
       while(i<arr1.length && j<arr2.length){
            if(arr1[i]<=arr2[j]){
                ans[index]=arr1[i]
                    i++;
            }else{
                ans[index]=arr2[j]
                    j++;
            } 
            index++
     
}
while(i<arr1.length){
    ans[index]=arr1[i]
    i++;
    index++
    
}
while(j<arr2.length){
  ans[index]=arr2[j]
  j++;
  index++
}
console.log(ans.join(" "))
  }



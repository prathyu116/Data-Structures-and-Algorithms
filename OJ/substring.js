function generateALlSubstr(N,A){
  //write code here
    for(var i=0;i<N;i++){
      for(var j=i;j<N;j++){
          var bag=""
       for(var k=i;k<=j;k++){
           bag=bag+A[k]
       }
       console.log(bag)
      }
    }

}

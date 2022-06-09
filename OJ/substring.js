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


function generateALlSubstr(N, A) {
  for (var i = 0; i < N; i++) {
    for (var j = i+1; j <= N; j++) {
      // var bag = ""
      // for (var k = i; k <= j; k++) {
      //   bag = bag + A[k]
      // }
      console.log(A.substring(i, j))
    }
  }

}
var s = "mo"
generateALlSubstr(s.length, s)

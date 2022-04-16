/*
1 2 7
3 4 6
5 6 10
the first column contains elements 1, 3 and 5
the last column contains elements 7, 6 and 10
sum=32

*/

function sumOfCornerColumns(N,M,arr){
    //write code here
    var sum=0
    for(var i=0;i<M;i++){
     if(i==0 || i==M-1){
         for(var j=0;j<N;j++){
            sum=sum+arr[j][i]
         }
     }
       
    }
  console.log(sum)
}

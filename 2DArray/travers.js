/*
1 8 9
2 7 10
3 6 11
4 5 12

o/p-->4 3 2 1 5 6 7 8 12 11 10 9
*/

function traverse2dArray(N, M, matrix){
    //write code here
    var bag=""
   for(var i=0;i<M;i++){
       for(var j=N-1;j>=0;j--){
           bag=bag+(matrix[j][i])+" "
       }
   }
   console.log(bag)
}
----------------------------------------------------------------------------

/*
1 8 9
2 7 10
3 6 11
4 5 12

o/p-->9 10 11 12 8 7 6 5 1 2 3 4
*/
function traverse2dArray(N, M, matrix){
    //write code here
    var bag=""
    for(var i=M-1;i>=0;i--){
        for(var j=0;j<N;j++){
            bag=bag+(matrix[j][i])+" "
        }
    }
  console.log(bag)
}
----------------------------------------------------------------------------

/*
4 7 1 1 7
8 9 9 6 1
6 4 9 5 1
7 7 4 7 7
8 6 2 5 5

o/p--->7 1 1 7 4 8 9 9 6 1 1 5 9 4 6 7 7 4 7 7 5 5 2 6 8
*/
function goInZigZag(N, M, matrix){
    //write code here
    var bag=""
    for(var i=0;i<N;i++){
        if(i%2==0){
            for(var j=M-1;j>=0;j--){
                bag=bag+matrix[i][j]+" "
            }
        }
        else if(i%2==1){
              for(var j=0;j<M;j++){
                bag=bag+matrix[i][j]+" "
            }
        }
       
    }
  console.log(bag)
}

----------------------------------------------------------------------------












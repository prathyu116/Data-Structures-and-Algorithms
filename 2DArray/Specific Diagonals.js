/*
 suppose we need to print the diagonals passing from 5
1 2 3
4 5 6
7 8 9

ans-->1 5 9
      3 5 7
*/
function specificDiagonals(R, C, matrix, K){
    //write code here
    var x,y;
    var left_D = []
    var right_D = []
    for(var i=0;i<R;i++){
        for(var j=0;j<C;j++){
            if(matrix[i][j]==K){
                x=i;
                y=j
            }
        }
    }
    for(var i=0;i<R;i++){
        for(var j=0;j<C;j++){
            if(j-i == y-x){
               left_D.push(matrix[i][j])
            }
            if(j+i == y+x){
              right_D.push(matrix[i][j])
            }
        }
    }
  console.log(left_D.join(" "));
  console.log(right_D.join(" "));
}

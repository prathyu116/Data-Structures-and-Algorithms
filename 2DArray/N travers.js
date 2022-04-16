/*
1 2 3
4 5 6
7 8 9

o/p
7 4 1 5 9 6 3 

*/
function nTraversal(matrix) {
    N=matrix.length
    var bag=""
      for (i = N-1; i >= 0; i--) {
        bag=bag+(matrix[i][0] + " ");
    }
   for (i = 1; i < N; i++) {
        bag=bag+(matrix[i][i] + " ");
    }
        for (i = N-2; i >= 0; i--) {
        bag=bag+(matrix[i][N-1] + " ");
    }
  console.log(bag)
}

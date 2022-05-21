https://oj.masaischool.com/contest/2713/problem/01


CIRCULAR
/*
1
3
1 2 3
4 5 6
7 8 9
o/p 7 4 1 2 3 6 9 8 

*/
function cirTraversal(matrix,N) {
//write code here
  var bag=""
      for (i = N-1; i >= 0; i--) {
        bag=bag+(matrix[i][0] + " ");
    }
    
   
      for (i = 1; i < N; i++){
        bag=bag+(matrix[0][i] + " ");
      }
       for (i = 1; i < N; i++){
        bag=bag+(matrix[i][N-1] + " ");
      }
       for (i = N-2; i >0 ; i--){
        bag=bag+(matrix[N-1][i] + " ");
      }
          console.log(bag)

}


anothor traversal 
https://oj.masaischool.com/contest/3924/problem/30

3 5
1 2 3 4 5
6 7 8 9 10
11 12 13 14 15
o/p==>Here, sum1 = 5 + 4 + 3 + 8 + 13 + 12 + 11 = 56

sum2 = 1 + 6 + 7 + 8 + 9 + 10 + 15 = 56

abs(sum1-sum2) = 0

function RectangularMatrix(N, M, matrix) {
  var sum1 = 0;
  var sum2 = 0;
  for (var i = 0; i <= Math.floor(N / 2); i++) {
    sum1 = sum1 + matrix[i][0];
  }
  for (i = 1; i < M; i++) {
    sum1 = sum1 + matrix[Math.floor(N / 2)][i];
  }
  for (var i = Math.floor(N / 2) + 1; i < N; i++) {
    sum1 = sum1 + matrix[i][M - 1];
  }

  for (var j = M - 1; j >= Math.floor(M / 2); j--) {
    sum2 = sum2 + matrix[0][j];
  }
  var bag = "";

  for (var j = 1; j < N; j++) {
    sum2 = sum2 + matrix[j][Math.floor(M / 2)];
  }
  for (var i = Math.floor(M / 2) - 1; i >= 0; i--) {
    sum2 = sum2 + matrix[N - 1][i];
  }

  console.log(Math.abs(sum2 - sum1));
}

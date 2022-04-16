/*
1 2 3
4 5 6
7 8 9

7 4 1 2 3 6 9 8 

*/https://oj.masaischool.com/contest/2713/problem/01

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

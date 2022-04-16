function ticTacToe(matrix){
    //write code here
  var win
  for(i=0;i<matrix.length;i++){
      if(matrix[i][0] == matrix[i][1] && matrix[i][1] == matrix[i][2]){
          win=matrix[i][0];
          break;
      }
      if(matrix[0][i] == matrix[1][i] && matrix[1][i] == matrix[2][i]){
          win=matrix[0][i];
          break;
      }
        
  }
     if(matrix[0][0] == matrix[1][1] && matrix[1][1] == matrix[2][2]){
          win=matrix[0][0];
        
      }
     if(matrix[2][0] == matrix[1][1] && matrix[1][1] == matrix[0][2]){
          win=matrix[0][2];
        
      }
      console.log(win)
}

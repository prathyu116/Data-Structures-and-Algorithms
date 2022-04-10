/*
https://oj.masaischool.com/contest/2982/problem/07
*/

function FollowTheKnight(matrix,row,col,N){
  if(row>9 || row<0 || col<0 || col>9) return
  if(N==0) {
      matrix[row][col]=1
      return 
  }
 
  FollowTheKnight(matrix,row-2,col+1,N-1) //0,3 pos
  FollowTheKnight(matrix,row-2,col-1,N-1)
   
  FollowTheKnight(matrix,row+2,col+1,N-1)
  FollowTheKnight(matrix,row+2,col-1,N-1)
   
  FollowTheKnight(matrix,row-1,col+2,N-1)
  FollowTheKnight(matrix,row-1,col-2,N-1)
   
  FollowTheKnight(matrix,row+1,col+2,N-1)
  FollowTheKnight(matrix,row+1,col-2,N-1)
    
}


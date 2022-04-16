function zTraversal(N,arr){
    //write code here
    var bag=""
      for (i = 0; i < N; i++) {
        bag=bag+(arr[0][i] + " ");
    }
    
    
    for(var i=1,j = N - 2;i<N;i++){
        bag=bag+(arr[i][j])+" "
        j--;
    }
       for (i = 1; i < N; i++){
        bag=bag+(arr[N - 1][i] + " ");
}
  console.log(bag)
}

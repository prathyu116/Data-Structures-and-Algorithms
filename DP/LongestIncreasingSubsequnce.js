https://www.youtube.com/watch?v=mouCn3CFpgg
https://replit.com/@PrathyuPrasad/AmusingDarkkhakiNumerators#index.js
/*
brute force wec can use backtracking..each elemtnt have 2 possibilty once part of increasing subsequnce or not part of increasing sub sequnce.there for every elemt have to 
two option.2^n exponetial time complexity


optimise approch create arr with length n filled once..bcause each elemtnt increasing subsequnce its self length 1

n^2 and o(n)  https://oj.masaischool.com/contest/3603/problem/001
*/

var lis=new Array(N).fill(1) //lis means longest incresing sub
for (var i = 1; i <N; i++) {
  for(var j=0;j<i;j++){
    if(A[i]>A[j] && lis[i] < lis[j]+1){  //the second condtion for find the longest index in arr [5 8 7 1 9] 9>1 but not longest increasing order
      lis[i]=lis[j]+1
    }
  } 
}
 var  max = Math.max( ...arr );
console.log(max)

}

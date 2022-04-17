https://oj.masaischool.com/contest/3603/problem/002
function LongestCommanSubseq(s1,s2,i,j){
  if(i >=s1.length || j >=s2.length) return 0
  if(s1[i]===s2[j]) return 1+LongestCommanSubseq(s1,s2,i+1,j+1)
  else return (Math.max(LongestCommanSubseq(s1,s2,i+1,j),LongestCommanSubseq(s1,s2,i,j+1)))
}
var ans=LongestCommanSubseq(s1,s2,i=0,j=0)
console.log(ans)

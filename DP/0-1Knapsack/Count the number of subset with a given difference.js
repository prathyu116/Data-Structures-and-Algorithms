/*
sum(sub1)-sum(sub2)=diff-->1
sum(sub1)+sum(sub2)=sum(arr)-->2
1+2 == s1=diff+sum/2

ee kittunna value aanu K

*/
function generate_subsequence(s , sum=0 , index,k){
  if(index==s.length){
   count++
    return sum==k
    
}
  var x =generate_subsequence(s,sum+s[index],index+1,k)
  if(x==true) return true
  var y=generate_subsequence(s,sum,index+1,k)
  return y

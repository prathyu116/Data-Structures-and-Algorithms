function check(N,arr){
// Write your code here!
var chunkSize=N/4
var ans =[]
for (let i = 0; i < arr.length; i += chunkSize) {
  const chunk = arr.slice(i, i + chunkSize);
 var sum= chunk.reduce((partialSum, a) => partialSum + a, 0);
 ans.push(sum)
}
console.log(2*ans[0] + ans[1] + 2*ans[2] + ans[3] )
}
https://oj.masaischool.com/contest/3924/problem/14

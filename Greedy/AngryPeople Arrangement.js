/* You have a circular dining table and N angry people.You need to place them on the table.Each person has a anger value.
You can place them in any order on the circular table.Once you place them you need to calculate the Danger value of your arrangement.
The danger value of the arrangement is the maximum difference of anger values of all the adjacent seated persons.You need to keep this danger value as low as possible.
https://oj.masaischool.com/contest/3265/problem/03
4
5 10 6 8   ==> 4
*/
var arr=[5 ,10, 6, 8]
arr.sort((a,b)=> a-b)
var arr2=[]

for(var i=arr.length-1;i>=0;i--){
  if(i%2==0){
    arr2.push(arr[i])
  }
}
for(var i=0;i<arr.length;i++){
  if(i%2==1){
    arr2.push(arr[i])
  }
}
var n=arr2.length
var i=0,j=1,max=-99999999
for (let i = 0; i < n-1; i++) {
  for(var j=i+1;j<=i+1;j++){
    diff=Math.abs(arr2[i]-arr2[j])
    max=Math.max(diff,max)
  }
}
console.log(max)

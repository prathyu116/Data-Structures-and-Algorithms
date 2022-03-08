// {
// 2:2,
// 6:1,===>o/p 6
// 3:2,
// 4:2

// }

var a=[2,6,3,2,4,3,4]
var ans=0
for(var i=0;i<a.length;i++){
  ans=ans^a[i]
 
}
console.log(ans)

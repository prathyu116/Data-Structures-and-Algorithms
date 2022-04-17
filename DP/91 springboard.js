var mat=
[
[3, 1, 7, 4, 2],
[2 ,1 ,3 ,1 ,1],
[1 ,2 ,2, 1, 8],
[2 ,2 ,1 ,5 ,3],
[2 ,1, 4, 4, 4],
[5 ,2 ,7 ,5 ,1]
]
var row=mat.length,col=mat[0].length

function springboard(mat,i,j){
  if(i<0 || i>=row || j<0 || j>=col) return 0
  var x=springboard(mat,i+1,j-1)
  var y=springboard(mat,i+1,j)
  var z=springboard(mat,i+1,j+1)
  var xy=Math.max(x,y)
  var res=Math.max(xy,z)
  return res+mat[i][j]
}

var gmax=null
for(var i=0;i<col;i++){
  var y=springboard(mat,0,i)
  gmax=Math.max(gmax,y)
}
console.log(gmax)

/*DP3 vedio
https://replit.com/@PrathyuPrasad/CautiousNoteworthyTest#index.js
required path 7+1+8+5+4+7
//The time complexity is O(N*M) where N is the No.of rows and M is the No.of columns because of nested loops.
*/

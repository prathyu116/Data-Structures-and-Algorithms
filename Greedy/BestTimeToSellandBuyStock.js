/*
buy on second day and cell on day 5
*/


var arr=[7,1,5,3,6,4]

var maxPro=0
var minPrice=arr[0]
for(var i=0;i<arr.length;i++){
minPrice=Math.min(minPrice,arr[i])
maxPro=Math.max(maxPro,arr[i]-minPrice)
  
}
console.log(maxPro)

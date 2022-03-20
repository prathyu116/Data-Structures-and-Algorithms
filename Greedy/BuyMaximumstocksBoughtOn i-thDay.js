/*
https://www.geeksforgeeks.org/buy-maximum-stocks-stocks-can-bought-th-day/

*/

function MaximumStocks(arr,k){
  var v=[]
  for(var i=0;i<arr.length;i++){
    v.push([arr[i],i+1])
  }
  v.sort((a,b)=>a[0]-b[0])
   var ans = 0;
    for (let i = 0; i < v.length; ++i) {
        ans += Math.min(v[i][1], k / v[i][0]);
        k -= v[i][0] * Math.min(v[i][1],(k / v[i][0]));
    }
 console.log(parseInt(ans))
    return ans;
}

var arr = [7, 10, 4 ]
var k=100
MaximumStocks(arr,k)

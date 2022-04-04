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


-----------------------------------

function buyMaximumProducts(price,k){
var arr=[],ans=0
  for(var i=0;i<price.length;i++){
    arr.push([price[i],i+1])
  }
  arr.sort((a,b)=>a[0]-b[0]) //we want max profit so sort inaccending order

  for(var i=0;i<arr.length;i++){
    var price=arr[i][0]
    var stock=arr[i][1]
    if(price*stock <=k){
      ans=ans+stock
      k=k-(price*stock)
    }else{
      ans=ans+Math.floor((k/price))
      k=k-price * Math.floor((k/price))
    }
  }
console.log(ans)
}
var K = 45
var price = [10, 7, 19 ]
buyMaximumProducts(price,K)



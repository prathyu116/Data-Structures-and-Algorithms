/*
A = [1,2,3]  M=4

1 .{1,1,1,1}

2. {1,1,2}

3. {2,2}

4. {1,3}
here greedy failed ...karanm oranamea kittuoo...need all possiblity XXXX

dp apply cheythal TC o(NM)
recursion anel ath exponential



*/
//code for recursion unique coin
  var ans = 999999
  for (var i = 0; i < arr.length; i++) {
    if (n - arr[i] >= 0) {
      var x = UniqueWays(n - arr[i], arr)
      ans=Math.min(x,ans)
    }
  }
  return ans+1
}
var ans = UniqueWays(4, [1, 2, 3])
console.log(ans)

//dp
function UniqueWays(n, arr, dp) {
  if (n == 0) return 0;
  if (n < 0) return 0;
  var ans = 999999
  for (var i = 0; i < arr.length; i++) {

    if (n - arr[i] >= 0) {
      var x = 0
      if (dp[n - arr[i]] !== -1) {
        x = dp[n - arr[i]]
      } else {
         x = UniqueWays(n - arr[i], arr,dp)
      }
      if(x <ans){
        ans=x
      }
    }
  }
  return dp[n]=ans+1
}
var n = 3
var dp = new Array(n + 1).fill(-1)
dp[0] = 0
var ans = UniqueWays(4, [1, 2, 3], dp)

console.log(ans)

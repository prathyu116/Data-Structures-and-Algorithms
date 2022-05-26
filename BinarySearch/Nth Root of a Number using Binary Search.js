//https://takeuforward.org/data-structure/nth-root-of-a-number-using-binary-search/
//https://replit.com/@PrathyuPrasad/InternalSuspiciousPrinters#index.js
The nth root of a number M is defined as a number X when raised to the power N equals M.



function multiply(number, n) {
  var ans = 1;
  for (var i = 1; i <= n; i++) {
    ans = ans * number;
  }
  return ans;
}

function aqrt(n, m) {
  var low = 1;
  var high = m;
  var eps = 0.000001; // used for taking approximations of the answer

  while ((high - low) > eps) {
    var mid = (((low + high) / 2));
    if (multiply(mid, n) < m) {
      low = mid;
    }
    else {
      high = mid;
    }
  }
  console.log(low.toFixed(3))
}
aqrt(3, 7)

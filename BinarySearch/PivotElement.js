//https://replit.com/@PrathyuPrasad/UnripeDarkmagentaLightweightprocess#index.js:1:9
//pivot elemtn--down th first monotomic function


function Pivot(n, arr) {
  var s = 0; var e = n - 1;

  while (s < e) {
    var mid = (s + e) / 2;

    if (arr[mid] > arr[0]) {
      s = mid + 1;
    } else {
      e = mid;
    }
  }
  return s;
}

var arr = [8, 10, 17, 1, 3]
var ans = Pivot(arr.length, arr)
console.log(ans)//3

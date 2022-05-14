function subarry(hours) {
  var n = hours.length, ans = 0;
  for (var i = 0; i < n; i++) {
    var cumSum = 0;
    for (var j = i; j >= 0; j--) {
      if (hours[j] > 8) {
        cumSum += 1;
      }
      else {
        cumSum -= 1;
      }
      if (cumSum > 0) {
        ans = Math.max(ans, i - j + 1);
      }
    }
  }
  return ans;
}


var hours = [9, 9, 6, 0, 6, 6, 9]
var ans = subarry(hours)
console.log(ans)

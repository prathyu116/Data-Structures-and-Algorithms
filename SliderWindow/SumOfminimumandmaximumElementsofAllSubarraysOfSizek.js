function printSumKMaxMin(N, k, arr) {
  var MaxList = [];
  var MinList = [];
  var sum = 0;
  var i = 0;
  var j = 0;
  while (j < arr.length) {
    while (MaxList.length != 0 && MaxList[MaxList.length - 1] < arr[j]) {
      MaxList.pop();
    }

    while (MinList.length != 0 && MinList[MinList.length - 1] > arr[j]) {
      MinList.pop();
    }

    MaxList.push(arr[j]);
    MinList.push(arr[j]);

    //calculation end

    if (j - i + 1 < k) j++;
    else if (j - i + 1 == k) {
      sum = sum + (MaxList[0] + MinList[0]);

      if (arr[i] == MaxList[0]) MaxList.shift();
      if (arr[i] == MinList[0]) MinList.shift();
      i++;
      j++;
    }
  }

  console.log(sum);
  return;
}
var k = 3;
var arr = [2, 5, -1, 7, -3, -1, -2];
var s = 7;
printSumKMaxMin(s, k, arr);

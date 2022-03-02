//https://replit.com/@PrathyuPrasad/ImperturbableAdolescentHexagons#c.js



function printKMax(N, k, arr) {
  var list = []
  var arr2 = []

  var i = 0
  var j = 0
  while (j < arr.length) {
    if (list.length == 0) {
      list.push(arr[j]);
    }
    else {
      while (list.length != 0 && list[list.length - 1] < arr[j]) { //motham pop cheyyum
        list.pop()
      }

      list.push(arr[j]);
    }
    //calculation end

    if (j - i + 1 < k)
      j++;
    else if (j - i + 1 == k) {
      arr2.push(list[0]);
      if (arr[i] == list[0])
         list.shift();
      i++;
      j++;
    }
  }
  console.log(arr2)
  return

}
var k = 3
var arr = [1,3,-1,-3,-6,7,8]
var s = 4
printKMax(s, k, arr)

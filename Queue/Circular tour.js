//https://practice.geeksforgeeks.org/problems/circular-tour/1
//babbr 1:06:01
N = 4
var Petrol = [4, 6, 7, 4]
var Distance = [6, 5, 3, 5]
var ans=CircularTour(Petrol,Distance,N)
console.log(ans)
function CircularTour(Petrol, Distance, N) {
  var avoiding = 0
  var balance = 0
  var start = 0
  
  for (var i = 0; i < N; i++) {
    balance = balance + (Petrol[i] - Distance[i])
    if (balance < 0) {
      avoiding = avoiding + balance
      start = i + 1
      balance = 0
    }
  }
  if (avoiding + balance >= 0) {
    return start
  } else {
    return -1
  }
}

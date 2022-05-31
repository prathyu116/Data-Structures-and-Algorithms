// function getNumSum(num){
//   let total = 0
//   while(num != 0){
//     let lastDigit = num%10
//     num = Math.floor(num/10)                     this function for 19->1^2 + 9^2 = 82
//     total=total+Math.pow(lastDigit,2)
//   }
//   return total
// }
// var ans = getNumSum(100)
// console.log(ans)


var isHappy = function(n) {
  let set = new Set().add(n)
  while (n !== 1) {
    n = String(n).split('').reduce((sum, num) => {
      return sum + Math.pow(num, 2)
    }, 0);
    console.log(n)
    if (set.has(n)) return false
    set.add(n)
  }
  return true
};
var ans = isHappy(19)
console.log(ans)


function Rotatethearrayreturnsback(N,k,nums){
  var temp = []
  for (var i = 0; i < nums.length; i++) {
    temp[(i + k) % nums.length] = nums[i];
  }
  console.log(temp.join(" "))
}

var sortArr = function(arr) {
  arr.sort((a,b)=>a-b)

  for(var i=0;i<arr.length;i=i+2){
      if(i+1<arr.length){
          var start = i
          var end = i+1
          var temp = arr[start]
          arr[start] = arr[i+1]
          arr[end] = temp
      }
  }
  console.log(arr.join(" "))
};

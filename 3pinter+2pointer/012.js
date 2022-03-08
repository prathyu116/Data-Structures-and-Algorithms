var arr=[2,0,0,1,2,0,1]

var temp
var l=0
var m=0
var h=arr.length-1

  while(m<=h){
    if(arr[m]==0){
   temp=arr[m]
   arr[m]=arr[l]
   arr[l]=temp
    m++
    l++
    
  }else if(arr[m]==1){
    m++
  }
  else {
   
     temp=arr[m]
   arr[m]=arr[h]
   arr[h]=temp
    h--
  
  }
  }

console.log(arr)

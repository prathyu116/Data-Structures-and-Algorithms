var arr=[]

 arr[0] = 0
 arr[1] =1
for(var i=2;i<8;i++){
  arr[i]=arr[i-1]+arr[i-2]
}
console.log(arr)

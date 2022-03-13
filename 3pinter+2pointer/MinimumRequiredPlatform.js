var a=[900,940,950,1100,1500,1800]
var d=[910,1200,1120,1130,1900,2000]
a.sort((x,y)=>{
  return x-y
})
d.sort((x,y)=>{
  return x-y
})
var maxOcc=1 
var res=1
var i=1,j=0
while(i<6 && j<6){
  if(a[i] <= d[j]){
    maxOcc++
    i++
  }else if(a[i]>d[j]){
    maxOcc--,
      j++
  }
  if(maxOcc>res) res = maxOcc
}
console.log(res)


// https://www.geeksforgeeks.org/minimum-number-platforms-required-railwaybus-station/
//6
// 9:00 9:40 9:50 11:00 15:00 18:00
// 9:10 12:00 11:20 11:30 19:00 20:00

// output =3

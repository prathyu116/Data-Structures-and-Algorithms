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
// *sorting not required

// output =3
//tc==nlogn+n  = nlogn
/*
1 2 6 8
5 9 7 10
oru manikk vaum 5 manikkea povuoo...... platform-1
2-9 ath randamathea platformil varum platform 2
6-7 ath onnamathea platformil varum platform 1
8-10 ath onnamathea platformil varum platform 1

*/

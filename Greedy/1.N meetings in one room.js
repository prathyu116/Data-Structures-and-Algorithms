/*https://practice.geeksforgeeks.org/problems/n-meetings-in-one-room-1587115620/1
https://www.youtube.com/watch?v=AsbDqOauGZE&list=PLDdcY4olLQk3cAxZPJXMbxqrM3PlNkmO8&index=1&t=826s
//https://replit.com/@PrathyuPrasad/RealAcidicOpendoc#index.js:2:9

end meeting basil low to high il sort cheyyuum
*/




function maxMeetings(start,end,N){
  var arr=[]
  for(var i=0;i<N;i++){
    arr[i]=([start[i],end[i]])
  }
  arr.sort((a,b)=>  a[1]-b[1])
  var i=0
  var count=1
  for(var j=1;j<N;j++){
    if(arr[i][1] < arr[j][0]){
      count++
      i=j
    }else{
      continue
    }
    
  }
  console.log(count)
}
var N = 3
var start = [10, 12, 20]
var end =  [20, 25, 30]
maxMeetings(start,end,N)



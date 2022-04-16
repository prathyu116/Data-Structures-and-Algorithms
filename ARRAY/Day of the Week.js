/*
Given the current day, and a number N, find what day will it be after N days.

Note:Current day will be from the set ->{"Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"}
*/

function dayOfTheWeek(day, N) {
  //write code here
var arr=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
for(var i=0;i<arr.length;i++){
    if(day==arr[i]){
        console.log(arr[(i+N)%7])
    }
}
 
}

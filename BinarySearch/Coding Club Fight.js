/* https://oj.masaischool.com/contest/3288/problem/04
Piyush went to fight for Coding Club. There were N soldiers with various powers. 
There will be Q rounds to fight and in each round Piyush's power will be varied. 
With power M, Piyush can kill all the soldiers whose power is less than or equal to M(<=M). 
After each round, All the soldiers who are dead in previous round will reborn.Such that in each round there will be N soldiers to fight. 
Count the number of soldiers that he can kill in each round and total sum of their powers.

7
1 
2 
3 
4                          
5 
6 
7
3->query
3
10
2

o/p
3 6
7 28
2 3


tc==nlogn+logn+n  -->nlogn
*/



function runProgram(input){
input=input.trim().split("\n").map(Number)
var size=+input[0]
var line=1
var powerArr = []
for(var i=0;i<size;i++){
    powerArr.push(input[line])
    line++
}
var Q=input[line]
line++
var Qarray=[]
for(var i=0;i<Q;i++){
    CodingClubFight(powerArr,input[line])
    line++
}

} 
function CodingClubFight(arr,key){
    arr.sort((a,b)=>{
        return a-b
    })
    
 var start = 0, end = arr.length - 1, UpperIndex = arr.length
  while (start <= end) {
    var mid = Math.floor(start + (end - start) / 2)

    if (arr[mid] <= key) {
      start = mid + 1
    } else {
      UpperIndex=mid
      end=mid-1
    } 
  }
    var tns=0
    var tsp=0

        for(var i=0;i<UpperIndex;i++){
        tns++
        tsp=tsp+arr[i]
    }
        console.log(tns,tsp)



  return UpperIndex
}

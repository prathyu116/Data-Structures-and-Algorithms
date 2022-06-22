var arr = [1,1]
var obj={}
for(var n of arr) obj[n]=obj[n]+1 || 1
var max= 0
for(var key in obj){
  max=Math.max(max,obj[key])
}
console.log(max)

var arr=[]

function generate_subsequence(s , sub , index){
  if(index==s.length){
    // console.log(sub)
    arr.push(sub.slice())
    return
}
  generate_subsequence(s,sub+s[index],index+1)
  generate_subsequence(s,sub,index+1)
    
   
}



 var str = [2,2,3]
let cur = ""
generate_subsequence(str ,cur , i =0)

var obj={}
for(var i of arr) (obj[i])=obj[i]+1 || 1
  
console.log(Object.keys(obj))

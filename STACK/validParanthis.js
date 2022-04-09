function validParanthis(str){
  const stack=[]
  let i=0
  let len=str.length

  while(i < len){
    let currParnthisis = str[i]
    stack.push(str[i])
    let open = stack[stack.length-2]
    let closed = stack[stack.length-1]
    if(open+closed === "()"  ){
      stack.pop()
      stack.pop()
    }
    i++
  }
  return stack.length===0
}
var ans = validParanthis("()")
console.log(ans)
------------------------------------------------------------------------------------------

//https://oj.masaischool.com/contest/2835/problem/02
    var obj={
     "}" : "{" ,
      ")": "(",
      "]" : "["
}

function BracketsBalanced(str){

var stack=[]
for(var i=0;i<str.length;i++){
    if(str[i]=="{" || str[i]=="[" || str[i]=="(" ){
        stack.push(str[i])
    }else{
        if(obj[str[i]]==stack[stack.length-1]){
                       stack.pop()

        }else{
             console.log("not balanced")
            return false
        }
    }
        
}
if(stack.length !== 0){
    console.log("not balanced")
}else{
    console.log("balanced")
}

}

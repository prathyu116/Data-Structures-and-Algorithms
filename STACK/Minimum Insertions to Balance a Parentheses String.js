
https://www.youtube.com/watch?v=5OMkd0iikJ0

function BracketsBalanced(str) {
  var stack = [], count = 0
  for (var i = 0; i < str.length; i++) {
    if (str[i] == "(") {
      stack.push(str[i])
    } else {
      if (stack.length === 0) {   //stack empty means no opening parenthis for that string
        if (i + 1 < str.length && str[i + 1] === ')') {
          count++
          i = i + 1
        } else {
          count =count+ 2 // i+1 th char closing parantisis allenkil
        }
      } else { //we have opening paranthis
        if (i + 1 < str.length && str[i + 1] === ')') {
         
          i = i + 1
        } else {
          count += 1 //i+1 th char closing parantisis allenkil

        }
        stack.pop()
      }
    }
  }
  while(stack.length !== 0){ //stack hava like ((((
    stack.pop()
    count=count+2  
  }
  console.log(count)
}
var s ="))())("
BracketsBalanced(s)

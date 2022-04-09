var global=[]
function GENERATEPARENTHESES(index,open,close,arr,n){
  if(open > n) return
  if(close > open) return
  
  if(index===2*n){
    global.push(arr.join(""))
    return
  }


  arr.push("(")
  GENERATEPARENTHESES(index+1,open+1,close,arr,n)
  arr.pop()
  
  arr.push(")")
  GENERATEPARENTHESES(index+1,open,close+1,arr,n)
  arr.pop()
  
}

GENERATEPARENTHESES(0,0,0,[],2)
console.log(global)

//https://www.youtube.com/watch?v=n5wAxQmMKkI&list=PLrClazTqVpJkZSFk6mRw5e0BOtOG4-7El&index=11


function reverseQ(Q,K) {
  var stack = []
  //pop first k from queue put into stack
  for (var i = 0; i < K; i++) {
    var val = Q[0]
    Q.shift()
    stack.push(val)

  }

  // fetch from stack and push to stack
  while(stack.length!=0){
    var val = stack[stack.length-1]
    stack.pop()
    Q.push(val)
  }

  //fetch first n-k element from Q and push back
  var t=Q.length-K
  while(t--){
    var val=Q[0]
    Q.shift()
    Q.push(val)
  }
  return Q
}
var q=[1,2,3,4,5],K=3
var ans = reverseQ(q,K)
console.log(ans)

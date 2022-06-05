var findMin = function(alpha,text) {
  var obj = {}
  for(var i=0;i<alpha.length;i++){
      obj[alpha[i]]=i
  }
  var sum = 0
  var cur=0
  for(var i=0;i<text.length;i++){
      if(i==0) sum=sum+obj[text[i]]
      else sum=sum+Math.abs(obj[text[i]]-obj[text[i-1]])
  }
  console.log(sum)
};

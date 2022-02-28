// 3              6
// 3 5 2          2 3 5 7 8 10       https://oj.masaischool.com/contest/3178/problem/02




var ot=[]


function generate_subsequence(s , sub , index){
    
        if(sub.length != ""){
             var sum=0
      for(var i=0;i<sub.length;i++){
        sum=sum+Number(sub[i])
      }
      if(ot.includes(sum)){
        sum=0
      }else{
        ot.push(sum)
      }
          
        }
        for(let i = index ; i < s.length ; i++){
            sub.push(s[i]);
            generate_subsequence(s , sub , i + 1)
            sub.pop()
        }
}

    var str = [2,3,5]
let output = []
generate_subsequence(str ,output , i =0)

ot.sort((a,b)=>{
  return a-b
})
console.log(ot)

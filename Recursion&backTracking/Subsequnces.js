//Enter code here
function generate_subsequence(s , sub , index){
    
        if(sub.length != ""){
            console.log(sub.join(""))
        }
        for(let i = index ; i < s.length ; i++){
            sub.push(s[i]);
            generate_subsequence(s , sub , i + 1)
            sub.pop()
        }
}

    var str = "abc"
let output = []
generate_subsequence(str ,output , i =0)



//including empty space

function generate_subsequence(s , sub , index){
  if(index==s.length){
    console.log(sub)
    return
}
  generate_subsequence(s,sub+s[index],index+1)
  generate_subsequence(s,sub,index+1)
    
   
}



 var str = "abc"
let cur = ""
generate_subsequence(str ,cur , i =0)

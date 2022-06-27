function subsequnce(index,list,arr){
  if(index===arr.length){
    console.log(list)
    return
  }
  list.push(arr[index])
  subsequnce(index+1,list,arr)
  list.pop()

  subsequnce(index+1,list,arr)//not taking
}

subsequnce(0,[],[1,2,3])

evvry index have 2 option ..theefore exponential










maaii



//Enter code here
function generate_subsequence(s , sub , index){
    
        if(sub.length != 0){
            console.log(sub.join(""))
        }
        for(let i = index ; i < s.length ; i++){
            sub.push(s[i]);
            generate_subsequence(s , sub , i + 1)
            sub.pop()
        }
}
function runProgram(input){
    var input=input.split("\n")
    var str = input[1]
let output = []
generate_subsequence(str ,output , i =0)


}

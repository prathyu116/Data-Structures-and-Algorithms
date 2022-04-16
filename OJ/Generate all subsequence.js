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
function runProgram(input){
    var input=input.split("\n")
    var str = input[1]
let output = []
generate_subsequence(str ,output , i =0)


}

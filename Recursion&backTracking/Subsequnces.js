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
function runProgram(input){
    var input=input.split("\n")
    var str = input[1]
let output = []
generate_subsequence(str ,output , i =0)


}

//Boiler Plate
process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
    read += input;
});
process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read)
});

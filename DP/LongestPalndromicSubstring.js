function masaiPalSubString(S){
    //write code here
    var max=0;
    for( var i=0;i<S.length;i++){
        for(var j=0;j<S.length;j++){
            var bag="";
            for(var k=i;k<=j;k++){
                bag=bag+S[k]
            }
            var new_bag=bag.split("").reverse().join("");
            
            if(new_bag==bag){
                 if(new_bag.length > max){
                     max=new_bag.length;
                 }
            }
           
        }
    }
    console.log(max)
}

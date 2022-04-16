function reverseTheValue(num) {
    // Write code here
     var rev_numb=0;
    while(num != 0){
           
        var digit = num%10;
        rev_numb=rev_numb*10+digit;
         num = Math.floor(num/10);

    }
    console.log(rev_numb);
}

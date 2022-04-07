
/*
let text = "Hello world!";
let result = text.substring(2);
ello world!

*/


function LengthRecursion(str){
  if (str == ""){
       return 0;
  }
           
        else{
             return LengthRecursion(str.substring(1)) + 1;
            
        }
           
        
       
    
  
     

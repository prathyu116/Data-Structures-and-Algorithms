

// 45 --> 9
// 8  --> 8
// 186 --> 6


  find(num);


function find(num){
   if(num.length==1){
       console.log(num);
       return;
   }
   let sum=0;
   for(let i=0;i<num.length;i++){
       sum+=(Number)(num[i]);
   }
   find(sum.toString());
    
     
}

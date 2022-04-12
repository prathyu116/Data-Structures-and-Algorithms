/*https://oj.masaischool.com/contest/3573/problem/006*


function NoddyExamination(size,difficulty,arr){
   var skipped_questions=0
   var solved=0
   for(var i=0;i<size;i++){
       if(skipped_questions>1) break
       if(arr[i]<=difficulty && skipped_questions <2) {
           solved++
       }else{
           skipped_questions++
       }
}
     console.log(solved)

}

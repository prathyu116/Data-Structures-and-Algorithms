// [2,6,3,2,4,3,4] ==> [ 6, 2, 2, 3, 3, 4, 4]






var a=[2,6,3,2,4,3,4]
for(var i=0;i<a.length;i=i+2){
  if(i+1<a.length){
    var start=i;
    var end=i+1;
     var temp = a[start];
   a[start] = a[i+1];
   a[end] = temp;

  }
}
console.log(a)

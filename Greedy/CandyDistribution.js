// https://www.youtube.com/watch?v=h6_lIwZYHQw https://oj.masaischool.com/contest/3288/problem/02
//childeren with hight rating get more candies than neighbours

function DistributeCandies(n,arr){

    let ltr = new Array(n).fill(1);
  
    for(let i = 1; i < n ; i++)
    {
        if (arr[i] > arr[i-1])
        {

            ltr[i] = ltr[i-1] + 1;
        }
    }
    
    let rtl = new Array(n).fill(1);
  
    for(let i = n-2; i >=0 ; i--)
    {
        if (arr[i] > arr[i+1])
        {

            rtl[i] = rtl[i+1] + 1;
        }
    }
   var sum = 0
    for(var i=0;i<ltr.length;i++){
        sum=sum+ Math.max(ltr[i],rtl[i])
    }
  console.log(sum)
   
}

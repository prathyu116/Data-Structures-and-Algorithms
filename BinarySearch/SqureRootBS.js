//in log(n) complexity
// sqrt(36)==>6

function SqureRoot(n){
    var s=0;
    var e=n;
    var ans=-1;
        while(s<=e){
                var mid=parseInt((s+(e-s)/2) )

          var squre=mid*mid;
            if(squre==n){
                console.log(mid)
                return 
            } 
            if(squre < n) {
                ans=mid;
                s=mid+1;
            }else{
                 e=mid-1;
            }
        }
   console.log("outside",ans)
   return 
}
SqureRoot(16)

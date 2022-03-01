//https://oj.masaischool.com/contest/2938/problem/02 


function firstNonRepeating(str) {
  var Q=[]
  var ans=[]
    var output = {};
    for (var i = 0; i < str.length; i++) {
        var K = str[i];
        if (output[K] == undefined) {
            output[K] = 1;
        } else {
            output[K]++;
        }

        Q.push(K);
      while(Q.length != 0){
        if(output[Q[0]] > 1){
          //repeating character
          Q.shift()
        }else{
          ans.push(Q[0])
          break
        }
      }
      if(Q.length==0){
        ans.push("#")
      }
    }
    console.log(ans)
}

firstNonRepeating("abadbc");

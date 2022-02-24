https://oj.masaischool.com/contest/3104/problem/03

function runProgram(input) {
  input = input.trim().split(" ");
  var N = +input[0];
  var K=+input[1]
  
  BirthdayShopping(N,1,K)

}

let ans = [];
let tmp = [];
         
    function BirthdayShopping(n, left, k)
    {
        if (k == 0) {
            ans.push(tmp);
            bag=""
            for(let i = 0; i < tmp.length; i++)
            {
              bag=bag+tmp[i]+" "
            }
            console.log(bag)
            
            return;
        }
 

        for (let i = left; i <= n; i++)
        {
            tmp.push(i);
            BirthdayShopping(n, i + 1, k - 1);
            tmp.pop();
        }
    }

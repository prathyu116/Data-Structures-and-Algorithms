// string a : given input
//i: 0
//j:a.length()-1
//ans : empty string
function String solve(String a,int i,int j,String ans)
{
        if (i>j) return ans;
        int mid = (i + j)/2;
        ans = ans + a.charAt(mid) + solve(a,i,mid-1,ans) + solve(a,mid+1,j,ans);
        return ans;
}
main()
{
    String str="abcdefghijk"    
  String result=solve(str, 0, str.length()-1, " ")
  print(result)
}




--------------------------------------------
The recurrence relation for the above code is

T(n) = 2T(n/2) + 1 ; n>1

T(n) = 1 ; n==1

so if we solve that recurrence relation then we can get time complexity asO(n)

Space Complexity:

O(log n) :maximum depth of recursion tree.

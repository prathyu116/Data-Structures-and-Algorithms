#include<iostream>
using namespace std;

int main()
{
    int tc;
    cin>>tc;
    while(tc--)
    {
        int n;
        cin>>n;
        
        int count = 0;
        while(n)
        {
            if(n%2)
                n-=1;
            else
                n/=2;
            count+=1;
        }
        cout<<count<<"\n";
    }
}

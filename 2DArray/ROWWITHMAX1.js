var items = [];

items.push([0,0,1,1]);
items.push([0,0,1,1]);
items.push([0,1,1,1]);
items.push([0,0,1,1]);

var m=4,n=4;

function hai(){
 for(var i=0;i<m;i++)
    {
        for(var j=0;j<n;j++)
        {
            if(items[j][i]==1)
            return j;
        }
    }
    return -1;
}
var ans = hai(items,n,m)
console.log(ans)

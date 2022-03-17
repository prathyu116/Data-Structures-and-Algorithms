/*  Manage stacks of bricks Ended
Description

You want all your bricks to be stacked. Currently, you have N stacks of bricks each with height H1, H2, H3, ... HN(assuming all bricks are of 1 unit height).You did not like the configuration much and want to change the height of each stack. To increase the height of a particular stack you can add some bricks to it and to decrease the height you can take out some bricks from that stack.

You require X units of effort for putting up an item onto the stack and Y units of effort for removing it. Find an integer which is the minimum effort required.

NOTE: You just need to make stacks of a given height. Not necessarily each stack should be made from its corresponding stack.
https://oj.masaischool.com/contest/3337/problem/03
*/




function ManageStacksBricks(arr1,arr2,n,x,y){
    arr1.sort((a,b)=>a-b);
    arr2.sort((a,b)=>a-b);
    let sum = 0;
    for(let i=0; i<n; i++){
        if(arr1[i]>arr2[i]){
            sum+= (y*(arr1[i]-arr2[i]));
        }else{
            sum+=(x*(arr2[i]-arr1[i]));
        }
    }
    console.log(sum)
}

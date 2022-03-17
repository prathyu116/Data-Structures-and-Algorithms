/*
A thief is stealing from a jewellery store and wants to steal the greatest value of gems possible. However, the getaway car he brought with him can only fit a maximum weight ofC. All the gems in the store have a value and a weight associated with them such that gem ihas a value v(i)and a weight w(i).

Your task is to figure out the maximum valueVof gems he can steal given the weight limit of the car. You can break a given gem into any fraction of itself.

NOTE: Maximum value vshould be rounded to the nearest integer

For example:

Let Total Weight C = 50

Number of gems = 3

The Value of gems: 60 100 120

The Weight of gems: 10 20 30

The total value of the gems he can carry is = 240

The fraction of each item taken is: 1 1 0.66666666666

Total weight is : 1*10 + 1*20 + 0.66666666666*30 = 49.999999999799996
--------------------------------------
Input Format

First line contains an integer denoting the capacity C

Second line contains the total number of gems n

Third line contains the value of each gem separated by a space

Fourth line contains the weight of each gem separated by a space
https://oj.masaischool.com/contest/3337/problem/01
*/


function Steamuchasyoucan(v,w,n,c){
   var vwr=[]
   for(var i=0;i<n;i++){
       val=(v[i]/w[i])
       vwr.push([val,v[i],w[i]])
   }
   vwr.sort((a,b)=>b[0]-a[0])

   var totalValue = 0;
   var currentWeight = 0;
   for(var i=0;i<n;i++){
       currentWeight=currentWeight+vwr[i][2]
       totalValue=totalValue+vwr[i][1]
       if(currentWeight > c){
         currentWeight=currentWeight-vwr[i][2]
         totalValue=totalValue-vwr[i][1]
         var diff=c-currentWeight
         totalValue=totalValue+diff*vwr[i][0]
         return totalValue
           
       }
       
       
   }
	
	
	
	
	
   return totalValue



}

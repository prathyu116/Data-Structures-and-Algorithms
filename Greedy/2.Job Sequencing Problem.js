
/*
https://practice.geeksforgeeks.org/problems/job-sequencing-problem-1587115620/1
https://www.youtube.com/watch?v=bID397v7ja4&list=PLDdcY4olLQk3cAxZPJXMbxqrM3PlNkmO8&index=3

Jobs will be given in the form (Jobid, Deadline, Profit) associated with that Job.

deadline 2 means we can complte job day 2 or in day one also
*/



function JobScheduling(job){
  job.sort((a,b)=>b[2]-a[2])
  var done=new Array(4).fill(false)
  console.log(done)
  var day=0,profit=0
  for(var i=0;i<job.length;i++){
    for(j=job[i][1]-1;j>=0;j--){  //why -1 bcoz of array index start from 0
      if(done[j]===false){
        day=day+1
        profit=profit+job[i][2]
        done[j]=true
        break
      }
    }
  }
  console.log(day,profit)
}
var N = 3
var job = [[1,4,20],[2,1,10],[3,1,40],[4,1,30]]
JobScheduling(job)



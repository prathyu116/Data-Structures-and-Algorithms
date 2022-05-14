function subsequnce(index,list,arr){
  if(index===arr.length){
    console.log(list)
    return
  }
  list.push(arr[index])
  subsequnce(index+1,list,arr)
  list.pop()

  subsequnce(index+1,list,arr)//not taking
}

subsequnce(0,[],[1,2,3])

evvry index have 2 option ..theefore exponential

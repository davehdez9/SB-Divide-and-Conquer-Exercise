function findRotatedIndex(arr, target){
    // if(arr.length === 0){
    //   return -1
    // }
  
    let first = 0
    let last = arr.length - 1 
    let firstValue = arr[0]
  
    while(first <= last){
      let middle = Math.floor((first + last) / 2 )
      let value = arr[middle]
      
      if(value === target){
        return middle
      }
      let am_big = value >= firstValue
      let target_big = target >= firstValue
      
      if(am_big === target_big){
        if(value < target){
          first = middle + 1
        } else {
          last = middle - 1
        }
      } else{
        if(am_big){
          first = middle + 1
        } else {
          last = middle - 1
        }
      }
    }
    return -1
}

module.exports = findRotatedIndex
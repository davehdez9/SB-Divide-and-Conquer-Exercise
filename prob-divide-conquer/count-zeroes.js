/** 
 * Given array of 1s and 0s - has all 1s first followed by all 0s
 * return -> number of zeroes in the array
*/

function binarySearch(arr){
    let leftIdx = 0
    let rigthIdx = arr.length - 1
  
    while(leftIdx <= rigthIdx){
      let middleIdx = Math.floor((leftIdx + rigthIdx)/2)
      let middleValue = arr[middleIdx]
      
      if(middleValue === 0){
        if(arr[middleIdx - 1] === 1){
            return arr.length - ((middleIdx - 1) + 1)
        } else if( arr[middleIdx - 1] === 0){
            rigthIdx = middleIdx - 1 
        }
      } else if(middleValue === 1){
        if(arr[middleIdx + 1] === 0){
          return arr.length - (middleIdx + 1)
        } else if(arr[middleIdx + 1] === 1){
          leftIdx = middleIdx + 1
        } 
      } 
    } 
}
  
function countZeroes(arr){
    if(arr[0] === 0){
        //arr has all 0's
        return arr.length
    } else if(arr[arr.length -1] === 1){
        //arr has all 1's
        return 0
    } else {
        return binarySearch(arr)
    }
}



module.exports = countZeroes
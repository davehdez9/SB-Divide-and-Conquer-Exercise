function findRotationCount(arr, low = 0, high = arr.length - 1) {
    //Array is not rotate
    if(high < low){
        return 0
    }

    //If there is one element left 
    if(high === low){
        return low
    }

    //Find Mid
    let mid = Math.floor((low + high) / 2 )

    //Check if element (mid +1) is minimum element
    if(mid < high && arr[mid + 1] < arr[mid]){
        return mid + 1
    }

    //Check if mid is the minimun element
    if(mid > low && arr[mid] < arr[mid - 1]){
        return mid
    }

    //Decide where need to go left or right
    if(arr[high] > arr[mid]){
        return findRotationCount(arr, low, mid - 1)
    }

    return findRotationCount(arr, mid + 1, high)
}

module.exports = findRotationCount
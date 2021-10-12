function binarySearch( arr, value, search ){
    let first = 0
    let last = arr.length - 1
    let result = -1
    
    
    while( first <= last ){
        let middle = Math.floor( ( first + last ) / 2 )

        if( arr[middle] === value ){
            result = middle
            if( search ){
                last = middle - 1
            } else {
             first = middle + 1
            }
        } else if ( value < arr[middle] ){
            last = middle - 1
        } else {
         first = middle + 1
        }
    }
    return result
}


function sortedFrequency( arr, value ) {
    let firstIndex = binarySearch(arr, value, true)
    let lastIndex = binarySearch(arr, value, false)

    if( firstIndex === -1 ){
        return -1
    } else {
        return lastIndex - firstIndex + 1
    }
}

module.exports = sortedFrequency
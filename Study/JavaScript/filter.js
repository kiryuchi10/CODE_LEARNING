/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */


var filter = function(arr, fn){
    const result = [];
    for (let i = 0; i < arr.length ; i++){
        // Check if the function returns a truthy value
        if(fn(arr[i]),i){
            result.push(arr[i]);
        }
    }
    return result;
}
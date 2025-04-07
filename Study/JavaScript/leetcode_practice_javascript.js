
var reduce = (init, arr) {

}


var map = (arr,fn) {
    let result = [];
    for (let i = 0; i < arr.length; i++){
        result.push(fn(arr[i],i));
    }
    return result;
}

/**
 * 
 * @param {*} fn 
 * @returns 
 */


var once = function(fn){
    let called = false;
    let result;

    return function(...args){
        if(!called){
            called = true;
            result = fn(...args);
            return result;
        }
        return undefined;
    }
};

let fn = (a,b,c) => a + b + c; 
let onceFn =once(fn);


console.log(onceFn(1,2,3));
console.log(onceFn(2,3,6));


/**
 * 
 * @param {*} str1 
 * @param {*} str2 
 * @returns 
 */
var gcdOfStrings = function(str1, str2){
    if (str1 + str2 !== str2 + str1){
        return "";
    }

    const gcd = (a,b) => b === 0 ? a : gcd(b, a % b);
    const len = gcd(str1.length, str2.length);
    return str1.slice(0, len);
}

console.log(gcdOfStrings("ABCABC","ABC"));
/**
 *  Array Intersect All (6 kyu): Instructions

    Write a function intersect that takes any number of arguments. The function must return an array containing all the values that is present in every argument given to the function.

    All arguments given will be arrays.
    The first argument determines the order of the returned values.
    Return an empty array for empty result set.
    Example

    var a = ['dog', 'bar', 'foo'];
    var b = ['foo', 'bar', 'cat'];
    var c = ['gin', 'bar', 'foo'];

    intersect(a, b, c); // ['bar', 'foo']

 * 
 */

let intersect = function () {
    if (arguments.length === 0)
        return [];
    let ans = [];
    for (let i = 0; i < arguments[0].length; ++i) {
        let count = 1;
        for (let j = 1; j < arguments.length; ++j) {
        if (arguments[j].indexOf(arguments[0][i]) !== -1) {
            count++;
        }
        }
        if (count === arguments.length) {
        ans.push(arguments[0][i]);
        }
    }
    console.log(ans);
    
}
      
var a = ['dog', 'bar', 'foo'];
var b = ['foo', 'bar', 'cat'];
var c = ['gin', 'bar', 'foo'];

intersect(a, b, c); // ['bar', 'foo']
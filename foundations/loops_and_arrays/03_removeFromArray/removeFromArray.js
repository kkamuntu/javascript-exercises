const removeFromArray = function(array, ...args) {
    for (let i = 0; i < args.length; i++) {
        let index = array.indexOf(args[i]);
        while (index > -1) {
            array.splice(index, 1);
            index = array.indexOf(args[i]);
        }
    }
    return array;
}; // try this creating a new array and pushing values that are not in the args array into it, then returning that new array
// this is a more efficient solution because it doesn't modify the original array and doesn't have to search for the index of each value multiple times
// also try using the filter method to create a new array with only the values that are not in the args array

// Do not edit below this line
module.exports = removeFromArray;

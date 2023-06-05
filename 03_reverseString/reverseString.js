/* const reverseString = function(string) {
    let stringArray = string.split("");
    let result
    result = stringArray.reverse();
    let result2 = result.join("");
    return result2;
} */

function reverseString(string) {
    return string.split("").reverse().join("");
}

// Do not edit below this line
module.exports = reverseString;

const palindromes = function (string) {

    function stringNoFluff(string) {
      return string.replace(/\W/g, "");
    };

    let array = stringNoFluff(string).split("").join("");
    let arrayReverse = stringNoFluff(string).split("").reverse().join("");

    if (array.toLowerCase() == arrayReverse.toLowerCase()) {
      return true;
    } else {
      return false;
    };
}; 

// Do not edit below this line
module.exports = palindromes;

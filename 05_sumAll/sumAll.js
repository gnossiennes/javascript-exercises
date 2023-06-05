const sumAll = function(min, max) {

    // this throws error if not integer (eg float or str)
    if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR";
    
    // this throws error if values are negative
    if (min < 0 || max < 0) return "ERROR";
    
    // This is shuffling the min/max values around if they're misordered (temp is placeholder)
    if (min > max) {
        const temp = min;
        min = max;
        max = temp;
    }

    // adds the values
    let sum = 0;
    for (let i = min; i < max + 1; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;

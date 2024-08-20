function sumArray(arr) {
    if (!Array.isArray(arr)) throw new TypeError('Input should be an array');
    return arr.reduce((sum, num) => sum + num, 0);
}



function removeDuplicates(arr) {
    if (!Array.isArray(arr)) throw new TypeError('Input should be an array');
    return [...new Set(arr)];
}

const mathOperations = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b,
};


module.exports = {
    sumArray,
    removeDuplicates,
    mathOperations,
};

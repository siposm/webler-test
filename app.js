/**
 * Addition function
 * @param {number} a 
 * @param {number} b 
 * @returns {number} returns a+b as a result
 */
function add(a, b) {
    return a + b
}

function div(a, b) {
    if (b !== 0)
        return a / b
    return "Division by zero is not possible!"
}

/**
 * Subtraction function.
 * @param {number} a 
 * @param {number} b 
 * @returns {number} Returns the a-b result
 */
function sub(a, b) {
    return a - b
}

/**
 * Multiplication function.
 * @param {number} a 
 * @param {number} b 
 * @returns {number} Returns the a*b result.
 */
function mul(a, b) {
    return a * b
}

console.log(add(10,20))
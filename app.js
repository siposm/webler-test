console.log('hello console')

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
 * @returns {number} result
 */
function sub(a, b) {
    return a - b
}

function mul(a, b) {
    return a * b
}

console.log(add(10,20))
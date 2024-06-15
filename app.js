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

console.log(add(10,20))
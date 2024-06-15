class Calculator {

    /**
     * Addition function
     * @param {number} a 
     * @param {number} b 
     * @returns {number} returns a+b as a result
     */
    add(a, b) {
        return a + b
    }

    /**
     * Subtraction function.
     * @param {number} a 
     * @param {number} b 
     * @returns {number} Returns the a-b result
     */
    sub(a, b) {
        return a - b
    }

    /**
     * Division function.
     * @param {number} a 
     * @param {number} b 
     * @returns {number} Returns the a/b result.
     */
    div(a, b) {
        if (b !== 0)
            return a / b
        return "Division by zero is not possible!"
    }

    /**
     * Multiplication function.
     * @param {number} a 
     * @param {number} b 
     * @returns {number} Returns the a*b result.
     */
    mul(a, b) {
        return a * b
    }
}

function Gizivagyok() {
    console.log("Gizi vagyok, szia!");
}

function Lacivagyok() {
    console.log("Én pedig Laci vagyok, szia!")
}

xxx


// Testing
console.log(add(10, 20))
console.log(sub(10, 20))
console.log(mul(10, 20))
console.log(div(10, 20))
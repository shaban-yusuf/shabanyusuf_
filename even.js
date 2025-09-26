/**
 * Checks if a number is even.
 * 
 * @param {number} num The number to check.
 * @returns {boolean} True if the number is even, false otherwise.
 */
function isEven(num) {
  // Use the modulo operator to determine if num is divisible by 2
  return num % 2 === 0;
}

// Test cases
console.log(isEven(4)); // Expected output: true
console.log(isEven(7)); // Expected output: false
console.log(isEven(-2)); // Expected output: true

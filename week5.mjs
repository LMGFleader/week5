//#region The Simple Calculator:
// Write a test suite for a multiply(a, b) function. Test that the function correctly multiplies two positive integers.What happens if one of the numbers is 0? Or a negative number?

function multiply(a, b) {
  // Simple multiplication function
  return a * b;
}
console.log(`   multiply(5, 3) = ${multiply(5, 3)}`);
console.log(`   multiply(0, 7) = ${multiply(0, 7)}`);
console.log(`   multiply(-4, 6) = ${multiply(-4, 6)}`);
//#endregion
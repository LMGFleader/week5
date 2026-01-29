//#region The Simple Calculator:
// Write a test suite for a multiply(a, b) function. Test that the function correctly multiplies two positive integers.What happens if one of the numbers is 0? Or a negative number?

function multiply(a, b) {
  // Simple multiplication function
  return a * b;
}
console.log(`${multiply(5, 3)}`);
console.log(`${multiply(0, 7)}`);
console.log(`${multiply(-4, 6)}`);
//#endregion

//#region The String Formatter:
// Write a test suite for a function format_name(first, last) that returns a "Last, First" string
// Ensure the function handles extra whitespace or incorrect casing by normalizing it

function format_name(first, last) {
  // Clean first name: trim whitespace, capitalize first letter, rest lowercase
  const cleanFirst = first.trim().charAt(0).toUpperCase() + 
                     first.trim().slice(1).toLowerCase();
  
  // Clean last name: trim whitespace, capitalize first letter, rest lowercase
  const cleanLast = last.trim().charAt(0).toUpperCase() + 
                    last.trim().slice(1).toLowerCase();
  
  // Return in "Last, First" format
  return `${cleanLast}, ${cleanFirst}`;
}
console.log(`"${format_name("John", "Smith")}"`);
console.log(`"${format_name("  john  ", "  DOE  ")}"`);
console.log(`"${format_name("sAmAnThA", "jOnEs")}"`);
//#endregion
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
//#region The Membership Checker:
// Write a test suite for a function is_adult(age) that returns True if the age is 18 or older and False otherwise

function is_adult(age) {
  // Check if age is 18 or + >=
  return age >= 18;
}

console.log(`${is_adult(17)}`);
console.log(`${is_adult(18)}`);
console.log(`${is_adult(19)}`);
//#endregion
//#region The List Filter:
// Write a test suite for a function get_even_numbers(input_list) that takes a list of integers and returns only the even ones

function get_even_numbers(input_list) {
  const even_numbers = [];
  
  for (let i = 0; i < input_list.length; i++) {
    if (input_list[i] % 2 === 0) {
      even_numbers.push(input_list[i]);
    }
  }
  
  return even_numbers;
}

console.log(`[${get_even_numbers([1, 2, 3, 4, 5, 6])}]`);
console.log(`[${get_even_numbers([10, 15, 20, 25])}]`);
console.log(`[${get_even_numbers([0, 1, 2])}]`);
console.log(`[${get_even_numbers([-4, -3, -2, -1, 0])}]`);
//#endregion
//#region The Error Handler:
// Write a test suite for a function divide(a, b). NB! as we know, dividing by zero is a math crime! Throw errors if crimes are commited!

function divide(a, b) {
  // Check if we're trying to divide by zero (the math crime!)
  if (b === 0) {
    throw new Error("You criminal!");
  }
  
  // If it's safe, do the division
  return a / b;
}

console.log(`${divide(15, 3)}`);
console.log(`${divide(10, 100)}`);
//How to run the code with an error and show a result commment?
  try {
    divide(0, 0);
  } catch (error) {
    console.log(`"${error.message}"`);
  }

  try {
    divide(-10, 0);
  } catch (error) {
    console.log(`"${error.message}"`);
  }

//#endregion
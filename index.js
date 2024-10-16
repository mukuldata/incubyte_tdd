// String Calculator TDD Kata

/* Step :1 Create a simple String calculator with a method signature like this:

int add(string numbers)
Input: a string of comma-separated numbers
Output: an integer, sum of the numbers
Examples:

Input: “”, Output: 0
Input: “1”, Output: 1
Input: “1,5”, Output: 6 */

function add(numbers) {
    if (numbers === "") {
      return 0;
    }
  }


/* Test cases */

// Test 1: (Empty string case)
function testEmptyString() {
    const result = add("");
    console.assert(result === 0, `Expected 0 but got ${result}`);
  }

  
// Test calls:
testEmptyString();


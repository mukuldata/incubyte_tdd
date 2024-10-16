// String Calculator TDD Kata

// add function :
function add(numbers) {
    if (numbers === "") {
      return 0;
    }
    return parseInt(numbers); 
  }

/* Test cases */

// Test 1: (Empty string case)
function testEmptyString() {
    const result = add("");
    console.assert(result === 0, `Expected 0 but got ${result}`);
  }

// Test 2 : (Single number case)

function testSingleNumber() {
    const result = add("1");
    console.assert(result === 1, `Expected 1 but got ${result}`);
  }


// Test calls:
testEmptyString();
testSingleNumber();


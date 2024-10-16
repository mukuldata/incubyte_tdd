// String Calculator TDD Kata

// add function :
function add(numbers) {
  if (!numbers) return 0;

  let delimiter = /,|\n/;
  let numberString = numbers;

  // Handle custom delimiter case
  if (numbers.startsWith("//")) {
    const parts = numbers.split("\n");
    delimiter = new RegExp(parts[0].slice(2)); 
    numberString = parts[1];
  }

  const numArray = numberString.split(delimiter).map(Number);

  const negatives = numArray.filter((num) => num < 0);

  if (negatives.length > 0) {
    throw new Error(`negatives not allowed: ${negatives.join(",")}`);
  }

  return numArray
  .filter(num => num <= 1000)
  .reduce((sum, num) => sum + num, 0);
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

// Test 3 : (Two numbers case)
function testTwoNumbers() {
    const result = add("1,5");
    console.assert(result === 6, `Expected 6 but got ${result}`);
}

// Test 4 : Handle more than two numbers
function testMultipleNumbers() {
    const result = add("1,2,3,4");
    console.assert(result === 10, `Expected 10 but got ${result}`);
}

// Test 5 : Additional test case with more numbers
function testManyNumbers() {
    const result = add("10,20,30,40,50");
    console.assert(result === 150, `Expected 150 but got ${result}`);
  }

// Test 6 : Test for new lines between numbers

function testNewLineBetweenNumbers() {
    const result = add("1\n2,3");
    console.assert(result === 6, `Expected 6 but got ${result}`);
}

// Test 7 :  Test for custom delimiters

function testCustomDelimiter() {
    const result = add("//;\n1;2");
    console.assert(result === 3, `Expected 3 but got ${result}`);
}

//Test 8 : Test for negative numbers

function testNegativeNumbers() {
  try {
    add("1,-2,3");
  } catch (e) {
    console.assert(
      e.message === "negatives not allowed: -2",
      `Expected 'negatives not allowed: -2' but got ${e.message}`
    );
  }

  try {
    add("-1,-2,3");
  } catch (e) {
    console.assert(
      e.message === "negatives not allowed: -1,-2",
      `Expected 'negatives not allowed: -1,-2' but got ${e.message}`
    );
  }
}

// Test 9 : Test to check for numbers greater than 1000

function testIgnoreNumbersAbove1000() {
    const result = add("2,1001");
    console.assert(result === 2, `Expected 2 but got ${result}`);
  }

// Test calls:
testEmptyString();
testSingleNumber();
testTwoNumbers();
testMultipleNumbers();
testManyNumbers();
testNewLineBetweenNumbers();
testCustomDelimiter();
testNegativeNumbers();
testIgnoreNumbersAbove1000()


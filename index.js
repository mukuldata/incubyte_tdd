// String Calculator TDD Kata

// add function :
function add(numbers) {
    if (!numbers) return 0;
  
    return numbers
      .replace(/\n/g, ",")
      .split(",")
      .map(Number)
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

// Test calls:
testEmptyString();
testSingleNumber();
testTwoNumbers();
testMultipleNumbers();
testManyNumbers();
testNewLineBetweenNumbers()


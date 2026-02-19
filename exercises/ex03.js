// Create a function called removeDuplicates that removes duplicates from the stack and keeping only unique values
// Remember the LIFO (Last-In, First-Out) rule
// Make sure to build a temporary stack

const Stack = require("../lib/Stack");

function removeDuplicates(stack) {
  // your code here
  const tempStack = new Stack();
  const uniqueNums = new Set();

  while (!stack.isEmpty()) {
    const removed = stack.pop();
    if (!uniqueNums.has(removed)) {
      uniqueNums.add(removed);
      tempStack.push(removed);
    }
  }

  while (!tempStack.isEmpty()) {
    const removed = tempStack.pop();
    stack.push(removed);
  }
}

// Create stack
const stack = new Stack();
stack.push(5);
stack.push(2);
stack.push(1);
stack.push(5);
stack.push(1);
stack.push(3);

removeDuplicates(stack);
console.log(stack.printStack()); // [2, 5, 1, 3]
// It should be >> 3,1,2,5

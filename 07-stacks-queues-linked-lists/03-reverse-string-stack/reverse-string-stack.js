const Stack = require('./stack');

function reverseStringStack(str) {
	const stack = new Stack();
	let reversedStr = '';

	for (const char of str) {
		stack.push(char);
	}

	while (!stack.isEmpty()) {
		reversedStr += stack.pop();
	}

	return reversedStr;
}

module.exports = reverseStringStack;

const Stack = require('./stack');

function balancedParenthesis(str) {
	const stack = new Stack();

	for (const char of str) {
		if (char === '(') {
			stack.push(char);
		}

		if (char === ')') {
			if (stack.isEmpty()) {
				return false;
			}

			stack.pop();
		}
	}

	return stack.isEmpty();
}

module.exports = balancedParenthesis;

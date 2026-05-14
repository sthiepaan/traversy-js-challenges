const Queue = require('./queue');
const Stack = require('./stack');

function isPalindromeQueueStack(str) {
	const queue = new Queue();
	const stack = new Stack();

	for (const char of str.toLowerCase().replace(/\W+/g, '')) {
		queue.enqueue(char);
		stack.push(char);
	}

	while (!queue.isEmpty() && !stack.isEmpty()) {
		if (queue.dequeue() !== stack.pop()) {
			return false;
		}
	}

	return true;
}

module.exports = isPalindromeQueueStack;

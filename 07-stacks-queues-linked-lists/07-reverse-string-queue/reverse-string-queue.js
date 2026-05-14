const Queue = require('./queue');

const reverseStringWithQueue = (str) => {
	const queue = new Queue();
	let reversedStr = '';

	for (const char of str) {
		queue.enqueue(char);
	}

	while (!queue.isEmpty()) {
		reversedStr = queue.dequeue() + reversedStr;
	}

	return reversedStr;
};

module.exports = reverseStringWithQueue;

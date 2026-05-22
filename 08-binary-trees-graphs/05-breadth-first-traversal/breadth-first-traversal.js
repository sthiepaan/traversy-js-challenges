const Queue = require('./queue');

class Node {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

function breadthFirstTraversal(root) {
	if (!root) {
		return [];
	}

	const queue = new Queue();
	const values = [];

	queue.enqueue(root);

	while (!queue.isEmpty()) {
		const curr = queue.dequeue();

		values.push(curr.value);

		if (curr.left) {
			queue.enqueue(curr.left);
		}

		if (curr.right) {
			queue.enqueue(curr.right);
		}
	}

	return values;
}

module.exports = {
	Node,
	breadthFirstTraversal,
};

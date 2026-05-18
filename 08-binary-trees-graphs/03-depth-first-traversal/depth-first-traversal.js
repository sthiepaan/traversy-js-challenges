const Stack = require('./stack');

class Node {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

function depthFirstTraversal(root) {
	if (!root) {
		return [];
	}

	const stack = new Stack();
	const values = [];

	stack.push(root);

	while (!stack.isEmpty()) {
		let node = stack.pop();

		values.push(node.value);

		if (node.right) {
			stack.push(node.right);
		}

		if (node.left) {
			stack.push(node.left);
		}
	}

	return values;
}

module.exports = {
	Node,
	depthFirstTraversal,
};

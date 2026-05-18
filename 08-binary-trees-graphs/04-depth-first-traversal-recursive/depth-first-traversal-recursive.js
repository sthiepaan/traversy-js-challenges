class Node {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

function recDepthFirstTraversal(root) {
	const values = [];

	function traverse(node) {
		if (!node) return;

		values.push(node.value);
		traverse(node.left);
		traverse(node.right);
	}

	traverse(root);

	return values;
}

module.exports = {
	Node,
	recDepthFirstTraversal,
};

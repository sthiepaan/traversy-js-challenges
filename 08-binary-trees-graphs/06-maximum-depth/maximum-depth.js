class Node {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

function maxDepth(root) {
	if (!root) {
		return 0;
	}

	const maxDepthLeft = maxDepth(root.left);
	const maxDepthRight = maxDepth(root.right);

	return Math.max(maxDepthLeft, maxDepthRight) + 1;
}

module.exports = {
	maxDepth,
	Node,
};

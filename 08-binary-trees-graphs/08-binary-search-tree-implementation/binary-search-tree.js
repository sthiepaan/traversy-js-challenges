class Node {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

class BinarySearchTree {
	constructor() {
		this.root = null;
	}

	insert(value) {
		const node = new Node(value);

		if (!this.root) {
			this.root = node;
		} else {
			let curr = this.root;

			while (true) {
				if (value < curr.value) {
					if (!curr.left) {
						curr.left = node;

						return this;
					}

					curr = curr.left;
				} else {
					if (!curr.right) {
						curr.right = node;

						return this;
					}

					curr = curr.right;
				}
			}
		}
	}

	lookup(value) {
		let curr = this.root;

		if (!curr) {
			return null;
		}

		while (curr) {
			if (value < curr.value) {
				curr = curr.left;
			} else if (value > curr.value) {
				curr = curr.right;
			} else if (value === curr.value) {
				return curr;
			}
		}

		return null;
	}

	remove(value) {
		const removeNode = (node, value) => {
			if (node === null) {
				return null;
			}

			if (value < node.value) {
				node.left = removeNode(node.left, value);

				return node;
			} else if (value > node.value) {
				node.right = removeNode(node.right, value);

				return node;
			} else {
				if (node.left === null) {
					return node.right;
				} else if (node.right === null) {
					return node.left;
				}

				let nodeTmp = node.right;

				while (nodeTmp.left !== null) {
					nodeTmp = nodeTmp.left;
				}

				node.value = nodeTmp.value;
				node.right = removeNode(node.right, nodeTmp.value);

				return node;
			}
		};

		this.root = removeNode(this.root, value);
	}

	printTree() {
		const printNode = (node) => {
			if (node === null) return;

			printNode(node.left);
			console.log(node.value);
			printNode(node.right);
		};

		printNode(this.root);
	}
}

module.exports = { Node, BinarySearchTree };

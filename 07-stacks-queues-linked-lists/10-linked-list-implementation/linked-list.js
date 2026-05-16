class Node {
	constructor(data) {
		this.data = data;
		this.next = null;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
	}

	add(value) {
		const node = new Node(value);

		if (this.head === null) {
			this.head = node;
		} else {
			this.tail.next = node;
		}

		this.tail = node;
	}

	printAll() {
		let curr = this.head;

		while (curr !== null) {
			console.log(curr.data);

			curr = curr.next;
		}
	}

	get(index) {
		let curr = this.head;
		let i = 0;

		while (i < index) {
			curr = curr.next;
			i += 1;
		}

		return curr.data;
	}

	insertAt(index, data) {
		if (index === 0) {
			const node = new Node(data);

			node.next = this.head;
			this.head = node;
		} else {
			let curr = this.head;
			let prev = null;
			let i = 0;

			while (i < index) {
				prev = curr;
				curr = curr.next;
				i += 1;
			}

			const node = new Node(data);

			node.next = curr;
			prev.next = node;
		}
	}

	removeFrom(index) {
		if (index === 0) {
			this.head = this.head.next;
		} else {
			let curr = this.head;
			let prev = null;
			let i = 0;

			while (i < index) {
				prev = curr;
				curr = curr.next;
				i += 1;
			}

			prev.next = curr.next;
		}
	}
}

module.exports = { Node, LinkedList };

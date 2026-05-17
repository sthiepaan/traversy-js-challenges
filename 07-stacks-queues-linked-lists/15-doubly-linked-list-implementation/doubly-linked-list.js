function Node(data) {
	return {
		data,
		prev: null,
		next: null,
	};
}

function DoublyLinkedList() {
	return {
		head: null,
		tail: null,
		length: 0,
		append(data) {
			const node = new Node(data);

			if (this.head) {
				node.prev = this.tail;
				this.tail.next = node;
			} else {
				this.head = node;
			}

			this.tail = node;
			this.length += 1;
		},
		prepend(data) {
			const node = new Node(data);

			if (this.head) {
				node.next = this.head;
				this.head.next = node;
			} else {
				this.tail = node;
			}

			this.head = node;
			this.length += 1;
		},
		insertAt(index, data) {
			if (index === 0) {
				return this.prepend(data);
			}

			if (index === this.length) {
				return this.append(data);
			}

			const node = new Node(data);
			let curr = this.head;
			let i = 0;

			while (i < index - 1) {
				curr = curr.next;
				i += 1;
			}

			node.next = curr.next;
			node.prev = curr;
			curr.next.prev = node;
			curr.next = node;
			this.length += 1;
		},
		get(index) {
			let curr = this.head;
			let i = 0;

			while (i < index) {
				curr = curr.next;
				i += 1;
			}

			return curr;
		},
		remove(index) {
			if (index === 0) {
				this.head = this.head.next;
				this.head.prev = null;
				return;
			}

			if (index === this.length) {
				this.tail = this.tail.prev;
				this.tail.next = null;
				return;
			}

			let curr = this.head;
			let i = 0;

			while (i < index) {
				curr = curr.next;
				i += 1;
			}

			curr.prev.next = curr.next;
			curr.next.prev = curr.prev;
			this.length -= 1;
		},
		contains(data) {
			let curr = this.head;

			while (curr) {
				if (curr.data === data) {
					return true;
				}

				curr = curr.next;
			}

			return false;
		},
		printAll() {
			let curr = this.head;

			while (curr) {
				console.log(curr.data);

				curr = curr.next;
			}
		},
	};
}

module.exports = DoublyLinkedList;

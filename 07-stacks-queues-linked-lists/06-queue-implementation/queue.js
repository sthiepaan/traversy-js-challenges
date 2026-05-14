class Queue {
	constructor() {
		this.maxSize = 100;
		this.queue = [];
		this.head = 0;
		this.tail = 0;
	}

	getLength() {
		return this.tail - this.head;
	}

	isFull() {
		return this.getLength() === this.maxSize;
	}

	isEmpty() {
		return this.getLength() === 0;
	}

	enqueue(value) {
		if (this.isFull()) return;

		this.queue[this.tail] = value;
		this.tail += 1;
	}

	dequeue() {
		const value = this.queue[this.head];

		this.head += 1;

		return value;
	}

	peek() {
		return this.queue[this.head];
	}
}

module.exports = Queue;

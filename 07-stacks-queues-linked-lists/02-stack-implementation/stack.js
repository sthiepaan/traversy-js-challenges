class Stack {
	constructor() {
		this.maxSize = 100;
		this.stack = [];
		this.top = -1;
	}

	isFull() {
		return this.top === this.maxSize - 1;
	}

	isEmpty() {
		return this.top === -1;
	}

	push(value) {
		this.top += 1;
		this.stack[this.top] = value;
	}

	pop() {
		const removedElement = this.stack[this.top];

		this.top -= 1;
		this.stack.length -= 1;

		return removedElement;
	}

	peek() {
		return this.stack[this.top];
	}
}

module.exports = Stack;

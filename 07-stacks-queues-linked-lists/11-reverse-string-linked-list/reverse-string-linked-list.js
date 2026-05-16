const { LinkedList } = require('./linked-list');

function reverseStringLinkedList(str) {
	const linkedList = new LinkedList();
	let reversedStr = '';

	for (const char of str) {
		linkedList.add(char);
	}

	let curr = linkedList.head;

	while (curr !== null) {
		reversedStr = curr.data + reversedStr;
		curr = curr.next;
	}

	return reversedStr;
}

module.exports = reverseStringLinkedList;

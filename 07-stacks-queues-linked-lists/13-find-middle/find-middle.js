function findMiddle(list) {
	let fast = list.head;
	let slow = list.head;

	while (fast !== null && fast.next !== null) {
		fast = fast.next.next;
		slow = slow.next;
	}

	return slow;
}

module.exports = findMiddle;

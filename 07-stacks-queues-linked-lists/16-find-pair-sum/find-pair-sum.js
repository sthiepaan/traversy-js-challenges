const DoublyLinkedList = require('./DoublyLinkedList');

function findPairSum(nums, targetSum) {
	const doublyLinkedList = new DoublyLinkedList();

	for (const num of nums) {
		const diff = targetSum - num;

		if (doublyLinkedList.contains(diff)) {
			return [diff, num];
		}

		doublyLinkedList.append(num);
	}

	return null;
}

module.exports = findPairSum;

function findMissingNumber(arr) {
	const sortedNumbers = arr.toSorted((a, b) => a - b);

	for (let index = 0; index < sortedNumbers.length; index++) {
		const currNumber = sortedNumbers[index];
		const nextNumber = sortedNumbers[index + 1] - 1;

		if (currNumber !== nextNumber) {
			return nextNumber;
		}
	}
}

module.exports = findMissingNumber;

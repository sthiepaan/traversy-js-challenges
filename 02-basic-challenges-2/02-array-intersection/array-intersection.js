function arrayIntersection(arr1, arr2) {
	const uniqueNumbers = new Set(arr1);
	const commonNumbers = [];

	for (const number of arr2) {
		if (uniqueNumbers.has(number)) {
			commonNumbers.push(number);
		}
	}

	return commonNumbers;
}

module.exports = arrayIntersection;

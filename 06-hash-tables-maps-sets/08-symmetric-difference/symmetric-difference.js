function symmetricDifference(arr1, arr2) {
	const set1 = new Set(arr1);
	const set2 = new Set(arr2);

	for (const num of set2) {
		if (set1.has(num)) {
			set1.delete(num);
		} else {
			set1.add(num);
		}
	}

	return Array.from(set1);
}

module.exports = symmetricDifference;

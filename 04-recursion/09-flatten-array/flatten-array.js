function flattenArray(arr) {
	const flattenedArr = [];

	for (const curr of arr) {
		if (Array.isArray(curr)) {
			flattenedArr.push(...flattenArray(curr));
		} else {
			flattenedArr.push(curr);
		}
	}

	return flattenedArr;
}

module.exports = flattenArray;

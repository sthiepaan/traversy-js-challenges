function quickSort(array) {
	if (array.length <= 1) {
		return array;
	}

	const pivot = array[0];
	const arrayLeft = [];
	const arrayRight = [];

	for (let index = 1; index < array.length; index++) {
		if (array[index] < pivot) {
			arrayLeft.push(array[index]);
		} else {
			arrayRight.push(array[index]);
		}
	}

	return [...quickSort(arrayLeft), pivot, ...quickSort(arrayRight)];
}

module.exports = quickSort;

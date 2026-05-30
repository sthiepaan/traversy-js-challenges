function insertionSort(array) {
	for (let index = 1; index < array.length; index++) {
		const curr = array[index];
		let prevIndex = index - 1;

		while (prevIndex >= 0 && array[prevIndex] > curr) {
			array[prevIndex + 1] = array[prevIndex];
			prevIndex -= 1;
		}

		array[prevIndex + 1] = curr;
	}

	return array;
}

module.exports = insertionSort;

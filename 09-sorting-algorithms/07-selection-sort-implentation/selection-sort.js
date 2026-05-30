function selectionSort(array) {
	let index = 0;

	while (index < array.length - 1) {
		let swapIndex = index;

		for (let nextIndex = index + 1; nextIndex < array.length; nextIndex++) {
			if (array[nextIndex] < array[swapIndex]) {
				swapIndex = nextIndex;
			}
		}

		if (index !== swapIndex) {
			const tmp = array[index];

			array[index] = array[swapIndex];
			array[swapIndex] = tmp;
		}

		index += 1;
	}

	return array;
}

module.exports = selectionSort;

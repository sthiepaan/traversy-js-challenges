function bubbleSort(array) {
	let swap;

	do {
		swap = false;

		for (let index = 0; index < array.length - 1; index++) {
			if (array[index] > array[index + 1]) {
				const tmp = array[index];

				array[index] = array[index + 1];
				array[index + 1] = tmp;
				swap = true;
			}
		}
	} while (swap);

	return array;
}

module.exports = bubbleSort;

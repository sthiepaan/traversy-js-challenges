function mergeSort(array) {
	if (array.length <= 1) {
		return array;
	}

	const indexMiddle = Math.floor(array.length / 2);
	const arrayLeft = mergeSort(array.slice(0, indexMiddle));
	const arrayRight = mergeSort(array.slice(indexMiddle));

	return merge(arrayLeft, arrayRight);
}

function merge(arrayLeft, arrayRight) {
	const array = [];
	let indexLeft = 0;
	let indexRight = 0;

	while (indexLeft < arrayLeft.length && indexRight < arrayRight.length) {
		if (arrayLeft[indexLeft] <= arrayRight[indexRight]) {
			array.push(arrayLeft[indexLeft]);

			indexLeft += 1;
		} else {
			array.push(arrayRight[indexRight]);

			indexRight += 1;
		}
	}

	return [...array, ...arrayLeft.slice(indexLeft), ...arrayRight.slice(indexRight)];
}

module.exports = mergeSort;

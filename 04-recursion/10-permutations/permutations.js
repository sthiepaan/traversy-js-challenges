function permutations(str) {
	if (str.length <= 1) {
		return [str];
	}

	const arr = [];

	for (let i = 0; i < str.length; i++) {
		const currChar = str[i];
		const restChars = str.slice(0, i) + str.slice(i + 1);
		const restPermutations = permutations(restChars);

		for (const restPermutation of restPermutations) {
			arr.push(currChar + restPermutation);
		}
	}

	return arr;
}

module.exports = permutations;

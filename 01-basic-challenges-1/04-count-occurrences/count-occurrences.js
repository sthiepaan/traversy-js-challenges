function countOccurrences(str, char) {
	let count = 0;

	for (const letter of str) {
		if (letter === char) {
			count += 1;
		}
	}

	return count;
}

module.exports = countOccurrences;

function countVowels(str) {
	const vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
	let count = 0;

	for (const letter of str.toLowerCase()) {
		if (vowels.includes(letter)) {
			count += 1;
		}
	}

	return count;
}

module.exports = countVowels;

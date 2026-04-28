function findFirstNonRepeatingCharacter(str) {
	const chars = new Map();

	for (const char of str) {
		chars.set(char, chars.has(char) ? chars.get(char) + 1 : 1);
	}

	for (const [char, count] of chars) {
		if (count === 1) {
			return char;
		}
	}

	return null;
}

module.exports = findFirstNonRepeatingCharacter;

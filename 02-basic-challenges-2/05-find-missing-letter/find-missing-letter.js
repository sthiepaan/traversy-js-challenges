function findMissingLetter(arr) {
	const charCodes = arr.map((char) => char.charCodeAt(0));

	for (let index = 0; index < charCodes.length; index++) {
		const currCharCode = charCodes[index];
		const nextCharCode = charCodes[index + 1] - 1;

		if (currCharCode !== nextCharCode) {
			return String.fromCharCode(nextCharCode);
		}
	}
}

module.exports = findMissingLetter;

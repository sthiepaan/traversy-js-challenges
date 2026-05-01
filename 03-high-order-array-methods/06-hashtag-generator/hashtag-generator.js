function generateHashtag(str) {
	if (!str) return false;

	let hashtag = '#';
	let isCapital = true;

	for (const char of str) {
		if (char !== ' ') {
			hashtag += isCapital ? char.toUpperCase() : char;
		}

		isCapital = char === ' ';
	}

	return hashtag.length > 140 ? false : hashtag;
}

module.exports = generateHashtag;

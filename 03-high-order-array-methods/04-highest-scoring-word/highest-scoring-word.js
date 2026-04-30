function highestScoringWord(str) {
	let word = '';
	let score = 0;
	let winner;

	for (const char of str) {
		if (char === ' ') {
			if (!winner || winner.score < score) {
				winner = { word, score };
			}

			word = '';
			score = 0;
		} else {
			word += char;
			score += char.charCodeAt(0) - 96;
		}
	}

	return winner.score < score ? word : winner.word;
}

module.exports = highestScoringWord;

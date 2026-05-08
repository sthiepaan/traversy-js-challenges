function wordFrequencyCounter(str) {
	const map = new Map();

	for (const word of str.toLowerCase().split(/\W+/)) {
		if (!word) continue;

		map.set(word, map.has(word) ? map.get(word) + 1 : 1);
	}

	return map;
}

module.exports = wordFrequencyCounter;

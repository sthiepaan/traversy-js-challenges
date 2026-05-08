function anagramGrouping(words) {
	const map = new Map();

	for (const word of words) {
		const group = word.split('').sort().join('');

		if (map.has(group)) {
			map.get(group).push(word);
		} else {
			map.set(group, [word]);
		}
	}

	return Array.from(map.values());
}

module.exports = anagramGrouping;

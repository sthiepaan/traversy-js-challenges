function areAllCharactersUnique(str) {
	const chars = str.split('');

	return chars.length === new Set(chars).size;
}

module.exports = areAllCharactersUnique;

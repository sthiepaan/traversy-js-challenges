const HashTable = require('./HashTable');

function anagramGrouping(words) {
	const hashTable = new HashTable();

	for (const word of words) {
		const key = word.split('').sort().join('');

		if (hashTable.has(key)) {
			hashTable.get(key).push(word);
		} else {
			hashTable.set(key, [word]);
		}
	}

	return hashTable.getValues();
}

module.exports = anagramGrouping;

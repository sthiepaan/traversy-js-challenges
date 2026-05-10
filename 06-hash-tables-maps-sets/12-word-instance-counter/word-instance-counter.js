const HashTable = require('./HashTable');

function wordInstanceCounter(str, word) {
	const hashTable = new HashTable();

	for (const currWord of str.toLowerCase().split(/\W+/)) {
		if (!currWord) continue;

		hashTable.set(currWord, hashTable.has(currWord) ? hashTable.get(currWord) + 1 : 1);
	}

	return hashTable.get(word);
}

module.exports = wordInstanceCounter;

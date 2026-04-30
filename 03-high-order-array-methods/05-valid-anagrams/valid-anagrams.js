function validAnagrams(str1, str2) {
	return str1.split('').toSorted().join('') === str2.split('').toSorted().join('');
}

module.exports = validAnagrams;

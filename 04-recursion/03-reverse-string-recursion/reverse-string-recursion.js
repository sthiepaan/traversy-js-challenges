function reverseString(str) {
	return str.length ? reverseString(str.slice(1)) + str[0] : '';
}

module.exports = reverseString;

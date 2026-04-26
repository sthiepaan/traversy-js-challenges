function isPalindrome(str) {
	str = str.toLowerCase().replaceAll(' ', '').replaceAll(',', '');

	return str === str.split('').reverse().join('');
}

module.exports = isPalindrome;

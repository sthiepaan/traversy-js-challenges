function formatPhoneNumber(numbers) {
	return numbers.join('').replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
}

module.exports = formatPhoneNumber;

function validatePassword(password) {
	const chars = password.split('');
	const hasLength = chars.length >= 8;
	const hasUppercase = chars.some((char) => /[A-Z]/.test(char));
	const hasLowercase = chars.some((char) => /[a-z]/.test(char));
	const hasDigit = chars.some((char) => /[0-9]/.test(char));

	return hasLength && hasUppercase && hasLowercase && hasDigit;
}

module.exports = validatePassword;

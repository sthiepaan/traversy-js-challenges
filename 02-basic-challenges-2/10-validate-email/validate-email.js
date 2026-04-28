function validateEmail(email) {
	return /^[a-z.]+\@[a-z]+\.[a-z]{2,}$/.test(email);
}

module.exports = validateEmail;

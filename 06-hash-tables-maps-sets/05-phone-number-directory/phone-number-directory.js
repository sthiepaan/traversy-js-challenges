function phoneNumberDirectory(phoneNumbers) {
	const map = new Map();

	for (const phoneNumber of phoneNumbers) {
		map.set(...phoneNumber.split(':'));
	}

	return map;
}

module.exports = phoneNumberDirectory;

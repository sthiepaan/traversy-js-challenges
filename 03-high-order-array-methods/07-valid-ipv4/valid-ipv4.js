const isValidIPv4 = (input) => {
	const octets = input.split('.');

	return (
		octets.length === 4 &&
		octets.every((octet) => {
			const parsedOctet = parseInt(octet);

			return octet === parsedOctet.toString() && parsedOctet <= 255;
		})
	);
};

module.exports = isValidIPv4;

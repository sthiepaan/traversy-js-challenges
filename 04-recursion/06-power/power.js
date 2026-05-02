function power(base, exponent) {
	return exponent !== 0 ? base * power(base, exponent - 1) : 1;
}

module.exports = power;

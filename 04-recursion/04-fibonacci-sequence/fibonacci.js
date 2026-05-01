function fibonacci(num) {
	return num > 1 ? fibonacci(num - 1) + fibonacci(num - 2) : num;
}

module.exports = fibonacci;

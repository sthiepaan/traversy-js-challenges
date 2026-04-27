function fizzBuzzArray(length) {
	return Array.from({ length }).map((_, index) => {
		const num = index + 1;
		const fizz = num % 3 === 0;
		const buzz = num % 5 === 0;

		if (fizz && buzz) {
			return 'FizzBuzz';
		}

		if (fizz) {
			return 'Fizz';
		}

		if (buzz) {
			return 'Buzz';
		}

		return num;
	});
}

module.exports = fizzBuzzArray;

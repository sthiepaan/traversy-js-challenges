function sumOfEvenSquares(numbers) {
	return numbers.filter((number) => number % 2 === 0).reduce((acc, curr) => acc + curr ** 2, 0);
}

module.exports = sumOfEvenSquares;

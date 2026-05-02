function arraySum(arr) {
	return arr.length ? arr.pop() + arraySum(arr) : 0;
}

module.exports = arraySum;

function numberRange(startNum, endNum) {
	if (endNum === startNum) {
		return [endNum];
	}

	const arr = numberRange(startNum, endNum - 1);

	arr.push(endNum);

	return arr;
}

module.exports = numberRange;

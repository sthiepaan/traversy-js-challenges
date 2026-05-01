function findMissingLetter(arr) {
	const charCode = arr
		.map((char) => char.charCodeAt(0))
		.find((charCode, index, mappedArr) => charCode - mappedArr[index - 1] > 1);

	return String.fromCharCode(charCode - 1);
}

module.exports = findMissingLetter;

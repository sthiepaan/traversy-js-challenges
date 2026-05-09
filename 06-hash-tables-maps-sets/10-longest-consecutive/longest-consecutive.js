function longestConsecutiveSequence(nums) {
	let currSequence = 0;
	let maxSequence = 0;

	for (let i = 0; i < nums.sort((a, b) => a - b).length; i++) {
		const currNum = nums[i];
		const prevNum = nums[i - 1];

		if (prevNum && currNum - prevNum !== 1) {
			currSequence = 1;
		} else {
			currSequence++;
		}

		if (currSequence > maxSequence) {
			maxSequence = currSequence;
		}
	}

	return maxSequence;
}

module.exports = longestConsecutiveSequence;

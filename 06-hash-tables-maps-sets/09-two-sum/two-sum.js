function twoSum(nums, target) {
	const map = new Map();

	for (let i = 0; i < nums.length; i++) {
		const num = nums[i];
		const num2Index = map.get(target - num);

		if (typeof num2Index !== 'undefined') {
			return [num2Index, i];
		}

		map.set(num, i);
	}

	return [];
}

module.exports = twoSum;

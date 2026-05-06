function maxSubarraySum(arr, k) {
	let maxSum = -Infinity;

	for (let i = 0; i <= arr.length - k; i++) {
		const currSum = arr.slice(i, i + k).reduce((acc, curr) => acc + curr, 0);

		maxSum = Math.max(maxSum, currSum);
	}

	return maxSum;
}

module.exports = maxSubarraySum;

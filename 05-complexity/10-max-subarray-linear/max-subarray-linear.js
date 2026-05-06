function maxSubarraySum(arr, k) {
	let winSum = 0;

	for (let i = 0; i < k; i++) {
		winSum += arr[i];
	}

	let maxSum = winSum;

	for (let i = k; i < arr.length; i++) {
		winSum += arr[i] - arr[i - k];
		maxSum = Math.max(maxSum, winSum);
	}

	return maxSum;
}

module.exports = maxSubarraySum;

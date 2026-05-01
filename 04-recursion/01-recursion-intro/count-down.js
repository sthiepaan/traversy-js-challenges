function countDown(num) {
	if (num <= 0) {
		return console.log('All done!');
	}

	console.log(num);
	countDown(num - 1);
}

module.exports = countDown;

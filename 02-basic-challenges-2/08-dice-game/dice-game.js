function diceGameSimulation(numSimulations) {
	const win = [7, 11];
	const lose = [2, 3, 12];
	const arr = [];

	for (let index = 0; index < numSimulations; index++) {
		const dice1 = Math.floor(Math.random() * 6) + 1;
		const dice2 = Math.floor(Math.random() * 6) + 1;
		const sum = dice1 + dice2;
		let result = 'roll again';

		if (win.includes(sum)) {
			result = 'win';
		}

		if (lose.includes(sum)) {
			result = 'lose';
		}

		arr.push({ dice1, dice2, sum, result });
	}

	return arr;
}

module.exports = diceGameSimulation;

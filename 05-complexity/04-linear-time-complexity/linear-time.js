/*
  Linear Time O(n)

  Linear time means that the time required to complete a function is directly proportional to the size of the input data set.
*/

function sumArray(arr) {
	let sum = 0;

	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}

	return sum;
}

const arr1 = [1, 2, 3, 4, 5];

console.time('Sum Array 1');
sumArray(arr1);
console.timeEnd('Sum Array 1');

const arr2 = Array.from({ length: 10_000_000 }, (_, index) => index + 1);

console.time('Sum Array 2');
sumArray(arr2);
console.timeEnd('Sum Array 2');

const dice = require('../../02-basic-challenges-2/08-dice-game/dice-game');

console.time('Dice Game');
console.log(dice(10_000_000));
console.timeEnd('Dice Game');

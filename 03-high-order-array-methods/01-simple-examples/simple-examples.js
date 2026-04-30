const numbers = [1, 2, 3, 4, 5];

/**
 * map: Transforms array elements with a provided function, creating a new array.
 */
const mappedNumbers = numbers.map((number) => number * 2);

/**
 * filter: Creates a new array with elements that satisfy a specified condition.
 */
const filteredNumbers = numbers.map((number) => number % 2);

/**
 * reduce: Accumulates array elements into a single value using a provided function.
 */
const reducedNumbers = numbers.reduce((acc, curr) => acc + curr, 0);

/**
 * forEach: Iterates through array elements and applies a function without creating a new array.
 */
numbers.forEach((number) => console.log(number));

/**
 * find: Returns the first array element that satisfies a specified condition.
 */
const numberThree = numbers.find((number) => number === 3);

/**
 * some: Checks if at least one array element satisfies a condition.
 */
const hasNumberGreaterThanThree = numbers.some((number) => number > 3);

/**
 * every: Checks if all array elements satisfy a condition.
 */
const hasNumbersLowerThanSix = numbers.every((number) => number < 6);

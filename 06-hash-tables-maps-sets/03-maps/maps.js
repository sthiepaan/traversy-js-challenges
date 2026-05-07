const nameMap = new Map([
	[1, 'John'],
	[2, 'Jane'],
	[3, 'Joe'],
]);

console.log(nameMap);
console.log(nameMap.get(1));
nameMap.set(4, 'Jack');
nameMap.set(5, 'Jill');
console.log(nameMap);
console.log(nameMap.has(1));
console.log(nameMap.has(6));
nameMap.delete(1);
console.log(nameMap.has(1));
console.log(nameMap.size);

for (const [key, value] of nameMap) {
	console.log(key, value);
}

nameMap.forEach((value, key) => console.log(key, value));
console.log(nameMap.keys());
console.log(nameMap.values());
nameMap.clear();
console.log(nameMap.size);

const myFunction = () => {};
const emptyObj = {};
const map2 = new Map([
	['name', 'John'],
	[1, 'number one'],
	[true, 'really true'],
	[null, 'null'],
	[myFunction, 'empty function'],
	[emptyObj, 'empty object'],
]);

console.log(map2.get(myFunction));
console.log(map2.get(emptyObj));

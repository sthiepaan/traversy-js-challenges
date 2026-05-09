const nameSet = new Set(['John', 'Jane', 'Joe', 'Jane', 'Joe']);

nameSet.add('Jack');
nameSet.add('Jill');
nameSet.delete('Jack');
console.log(nameSet);
console.log(nameSet.has('Jack'));
console.log(nameSet.size);
console.log(nameSet.values());

for (const value of nameSet) {
	console.log(value);
}

const nameArray = Array.from(nameSet);

console.log(nameArray);

const nameSet2 = new Set(nameArray);

console.log(nameSet2);
nameSet2.clear();
console.log(nameSet2);

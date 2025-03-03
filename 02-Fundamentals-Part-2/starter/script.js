'use strict';

/*
// 33. FUNCTIONS -
function logger() {
	console.log('My name is Michael');
}

// calling / running / invoking the function
logger();

function fruitProcessor(apples, oranges) {
	// console.log(apples, oranges);
	const juice = `Juice with ${apples} apples${
		oranges === 0
			? ''
			: oranges === 1
			? ' and ' + oranges + ' orange'
			: ' and ' + oranges + ' oranges'
	}.`;
	return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

// 34. FUNCTION DECLARATIONS VS. EXPRESSIONS -
// Function Declaration -
function calcAge1(birthYear) {
	return 2025 - birthYear;
}

const age1 = calcAge1(1970);
console.log(age1);

// Function Expression -
const calcAge2 = function (birthYear) {
	return 2025 - birthYear;
};
const age2 = calcAge2(1972);
console.log(age2);

// 35. ARROW FUNCTIONS -
// Arrow Function (ES6+) -
const calcAge3 = (birthYear) => 2025 - birthYear;
const age3 = calcAge3(2013);
console.log(age3);

// How many years does a person have before their retirement?
const yearsUntilRetirement = (birthYear, firstName) => {
	const date = new Date();
	const curYear = date.getFullYear();
	const age = curYear - birthYear;
	const retirement = 65 - age;

	// return age < 65 ? retirement : 'You are eligible for retirement.';
	return age < 65
		? `${firstName} retires in ${retirement} years.`
		: `${firstName} is eligible for retirement.`;
};

const yearsUntilMyRetirement = yearsUntilRetirement(1970, 'Michael');
console.log(yearsUntilMyRetirement);
console.log(yearsUntilRetirement(1955, 'Ali'));


// 36. FUNCTIONS CALLING OTHER FUNCTIONS -
function cutFruitPieces(fruit) {
	return fruit * 4;
}

function fruitProcessor(apples, oranges) {
	const applePieces = cutFruitPieces(apples);
	const orangePieces = cutFruitPieces(oranges);

	const juice = `Juice with ${applePieces} apple pieces and ${orangePieces} orange pieces.`;
	return juice;
}

console.log(fruitProcessor(5, 4));


// 37. REVIEWING FUNCTIONS -

const calcAge = function (birthYear) {
	const date = new Date();
	const curYear = date.getFullYear();
	return curYear - birthYear;
};

// Function Expression -
const yearsUntilRetirement = function (birthYear, firstName) {
	const age = calcAge(birthYear);
	const retirement = 65 - age;

	if (retirement > 0) {
		console.log(`${firstName} retires in ${retirement} years`);
		return retirement;
	} else {
		console.log(`${firstName} has already retired 🎉`);
		return -1;
	}
};

console.log(yearsUntilRetirement(1970, 'Michael'));
console.log(yearsUntilRetirement(1972, 'Aisha'));
console.log(yearsUntilRetirement(1948, 'Lubov'));

// 39. INTRODUCTION TO ARRAYS -
// const friend1 = 'Michael';
// const friend2 = 'Steven';
// const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
// console.log(friends);

// const years = new Array(1991, 1984, 2008, 2020);

// console.log(friends[0]);
// console.log(friends[2][friends[2].length - 1]);

// console.log(friends[2]);
// friends[2] = 'Jay';
// console.log(friends[2]);
// console.log(friends);

const firstName = 'Michael';

// const getCurYear = () => {
// 	const date = new Date();
// 	const curYear = date.getFullYear();
// 	return curYear;
// };

const calcAge = (birthYear) => {
	const date = new Date();
	const curYear = date.getFullYear();
	return curYear - birthYear;
};

const michael = [
	firstName,
	'Kleemoff',
	calcAge(1970),
	'software engineer',
	friends,
];
console.log(michael);

const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);

console.log(age1, age2, age3);

const ages = [
	calcAge(years[0]),
	calcAge(years[1]),
	calcAge(years[years.length - 1]),
];

console.log(ages);


// BASIC ARRAY OPERATIONS (METHODS) -

// Add Elements
const friends = ['Michael', 'Steven', 'Peter'];
friends.push('Jay'); // returns length of array
console.log(friends);

friends.unshift('John'); // Add element to the beginning of the array. Returns length of array.
console.log(friends);

// Remove Elements
friends.pop(); // Remove last element
const popped = friends.pop(); // returns the popped element
console.log(friends);
console.log(popped);

const shifted = friends.shift(); // Remove first element. Returns the element.
console.log(friends);
console.log(shifted);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));

if (friends.includes('Peter')) {
	console.log('You have a friend called Peter');
}

// 42. INTRODUCTION TO OBJECTS -

// Object Literal
const jonas = {
	firstName: 'Jonas',
	lastName: 'Schmedtmann',
	age: 2037 - 1991,
	job: 'teacher',
	friends: ['Michael', 'Peter', 'Steven'],
};
console.log(jonas);

// 43. DOT VS. BRACKET NOTATION -

// Dot
console.log(jonas.lastName);

// Bracket
console.log(jonas['lastName']);

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

const interestedIn = prompt(
	'What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends.'
);

if (jonas[interestedIn]) {
	console.log(jonas[interestedIn]);
} else {
	console.log(
		'Wrong request! Choose between firstName, lastName, age, job, and friends.'
	);
}

// Add new properties to the object
jonas.location = 'Portugal';
jonas['twitter'] = '@jonasschmedtman';
console.log(jonas);

// Challenge
// "Jonas has 3 friends, and his best friend is called Michael."
console.log(
	`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}.`
);

// 44. OBJECT METHODS -

const jonas = {
	firstName: 'Jonas',
	lastName: 'Schmedtmann',
	birthYear: 1991,
	job: 'teacher',
	friends: ['Michael', 'Peter', 'Steven'],
	hasDriversLicense: false,

	// calcAge: function (birthYear) {
	// 	return 2037 - birthYear;
	// },

	// calcAge: function () {
	// 	// console.log(this);
	// 	return 2037 - this.birthYear;
	// },

	calcAge: function () {
		this.age = 2037 - this.birthYear;
		return this.age;
	},

	getSummary: function () {
		return `${this.firstName} is a ${this.calcAge()}-year old ${
			this.job
		}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`;
	},
};

// console.log(jonas.calcAge());

// console.log(jonas.age);
// console.log(jonas.age);
// console.log(jonas.age);

// console.log(jonas['calcAge'](1991));

// Challenge
// "Jonas is a 46-year old teacher, and he has a/no driver's license"
console.log(jonas);
console.log(jonas.getSummary());


// 46. ITERATION: THE FOR LOOP -
for (let set = 1; set <= 3; set++) {
	console.log(`Doing Set ${set}`);
	for (let rep = 1; rep <= 10; rep++) {
		console.log(`  Lifting weights repetition ${rep} 🏋️‍♂️`);
	}
}

// 47. LOOPING ARRAYS, BREAKING AND CONTINUING -

const jonasArray = [
	'Jonas',
	'Schmedtmann',
	2037 - 1991,
	'teacher',
	['Michael', 'Peter', 'Steven'],
	true,
];

const types = [];

for (let i = 0; i < jonasArray.length; i++) {
	// Reading from `jonasArray`
	console.log(jonasArray[i], typeof jonasArray[i]);

	// Filling `types` array
	// types[i] = typeof jonasArray[i];
	types.push(typeof jonasArray[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

function calcAge(birthYear) {
	const date = new Date();
	const year = date.getFullYear();
	return year - birthYear;
}

for (let i = 0; i < years.length; i++) {
	ages[i] = calcAge(years[i]);
}
console.log(ages);

// `continue` and `break`
const types2 = [];

console.log('---- ONLY STRINGS ----');
for (let i = 0; i < jonasArray.length; i++) {
	if (typeof jonasArray[i] !== 'string') {
		continue;
	}
	console.log(jonasArray[i], typeof jonasArray[i]);
	types2.push(typeof jonasArray[i]);
}

console.log(types2);

console.log('---- BREAK WITH NUMBER ----');
for (let i = 0; i < jonasArray.length; i++) {
	if (typeof jonasArray[i] === 'number') break;

	console.log(jonasArray[i], typeof jonasArray[i]);
}

// 48. LOOPING BACKWARDS AND LOOPS IN LOOPS -

const jonasArray = [
	'Jonas',
	'Schmedtmann',
	2037 - 1991,
	'teacher',
	['Michael', 'Peter', 'Steven'],
	true,
];

// Looping in reverse
for (let i = jonasArray.length - 1; i >= 0; i--) {
	console.log(jonasArray[i]);
}

// Nested Loops
for (let exercise = 1; exercise < 4; exercise++) {
	console.log(`-------- Starting exercise ${exercise}`);

	for (let rep = 1; rep < 6; rep++) {
		console.log(`Exercise ${exercise}: Lifting weights repetition ${rep} 🏋️‍♂️`);
	}
}
*/

// 49. THE WHILE LOOP -

// for (let rep = 1; rep <= 10; rep++) {
// 	console.log(`Lifting weights repetition ${rep} 🏋️‍♂️`);
// }

// let rep = 1;
// while (rep <= 10) {
// 	console.log(`WHILE: Lifting weights repetition ${rep} 🏋️‍♂️`);
// 	rep++;
// }

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
	console.log(`You rolled a ${dice}`);
	dice = Math.trunc(Math.random() * 6) + 1;
	if (dice === 6) console.log('Loop is about to end...');
}

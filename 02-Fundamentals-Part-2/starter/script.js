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
*/

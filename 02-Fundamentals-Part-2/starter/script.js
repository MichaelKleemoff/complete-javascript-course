'use strict';

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

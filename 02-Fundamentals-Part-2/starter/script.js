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

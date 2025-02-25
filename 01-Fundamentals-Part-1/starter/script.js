const now = new Date();
const curYear = now.getFullYear();

const ageMichael = curYear - 1970;
const ageAisha = curYear - 1972;
console.log('ageMichael: ', ageMichael);
console.log('ageAisha: ', ageAisha);

let x = 5;
let y = 5;
x++;
++y;
console.log(x++);
console.log(++y);
console.log(x);
console.log(y);

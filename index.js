const money = 50;
// money = 25;
const rich = money + 10;
let poor = rich + 10;
poor = 10 + rich

// console.log(poor);

// let numbers = [2,3,45, 65,54];
// numbers[2] = 43;
// numbers.push(43, 4, 6, 4);
numbers = [3, 5, 6, 4]
// console.log(numbers);

let student = {name: 'akash', class: 12};
// student.name = 'shakib';
student = {name: 'shakib', class: 11};
// console.log(student);

for(let i = 1; i < 10; i++){
	// console.log(i);
}

// function add(num1, num2 = 0){
	// let result = 0;
	// result = num1 + num2;
	// console.log(result);
// }

// add(3)

function add(num1 = 8, num2 = 8){
	const result = num1 + num2;
	// console.log(num1, num2, result);

	return result;
}

// const sum = add(4, 5);
// const sum = add(3);
// const sum = add(4, 5, 6) 
// const sum = add() 
// console.log(sum);

function fullName(first, last =''){
	const full = first + ' ' + last;

	// console.log(first, last, full);
	return full;
}

// const name = fullName(, 'Akash');
// console.log(name);

function friends(numbs = []){
	const num = [345, 54, 54];
	// console.log('inside array', numbs, num);
	return num;
}

const numbs = friends(23,45, 65,45);
// console.log('outside array', numbs);

const first = 'Abdul Mazid';
const last = 'Akash';

// const result = first + ' ' + last;
// const result = `My name is ${first} ${last}`;
// console.log(result);

// const sentence = `My name is Akash
// Shakib Al Hasan
// Mashrafe Bin Mortaza
// Tamim Iqbal
// `

const sentence = 'My name is Akash \n' + 'Shakib Al Hasan \n' + 'Mashrafe Mortaza \n' + 'Tamim Iqbal';

// console.log(sentence);


function add(a, b){
	return a + b;
}

const add1 = function(a, b){
	return a + b;
}

const add2 = (a, b) => a + b;

const multiply = (a, b, c, d) => a * b * c * d;

const divide = (a, b) => a / b;

const dividing = (a, b) => a % b;
// const sum = add2(3, 4);
// console.log(sum);
// const mult = multiply(2, 2, 2, 2);
// console.table(mult);
// const divi = dividing(12, 5);
// console.table(divi);

// const person = person => person.age;

// const person1 = person({name: 'shakib', age: 34});
// console.log(person1);

// const person2 = person => person.name;

// const person3 = person2({name: 'Akash', age: 25});
// console.log(person3);

// const numbers1 = num => num[2] ;

// const number = numbers1([34, 65, 87, 89, 78]);
// console.log(number);

// const math = () => Math.PI;

// console.log(math());

const math = (x, y, z) =>{
	const sum = x + y + z;
	const multiply = x * y * z;
	const result = parseFloat(multiply / sum).toFixed(2);

	return result;
}

// console.log(math(4, 4, 6));




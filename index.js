const money = 50;
// money = 25;
const rich = money + 10;
let poor = rich + 10;
poor = 10 + rich

// console.log(poor);

let numbers = [2,3,45, 65,54];
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
const sum = add() 
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

console.log(sentence);




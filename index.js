const money = 50;
// money = 25;
const rich = money + 10;
let poor = rich + 10;
poor = 10 + rich

// console.log(poor);

// let numbers = [2,3,45, 65,54];
// numbers[2] = 43;
// // numbers.push(43, 4, 6, 4);
// numbers = [3, 5, 6, 4]
// // console.log(numbers);

// let student = {name: 'akash', class: 12};
// // student.name = 'shakib';
// student = {name: 'shakib', class: 11};
// console.log(student);

// for(let i = 1; i < 10; i++){
// 	// console.log(i);
// }

// // function add(num1, num2 = 0){
// 	// let result = 0;
// 	// result = num1 + num2;
// 	// console.log(result);
// // }

// // add(3)

// function add(num1 = 8, num2 = 8){
// 	const result = num1 + num2;
// 	// console.log(num1, num2, result);

// 	return result;
// }

// // const sum = add(4, 5);
// // const sum = add(3);
// // const sum = add(4, 5, 6) 
// // const sum = add() 
// // console.log(sum);

// function fullName(first, last =''){
// 	const full = first + ' ' + last;

// 	// console.log(first, last, full);
// 	return full;
// }

// // const name = fullName(, 'Akash');
// // console.log(name);

// function friends(numbs = []){
// 	const num = [345, 54, 54];
// 	// console.log('inside array', numbs, num);
// 	return num;
// }

// const numbs = friends(23,45, 65,45);
// // console.log('outside array', numbs);

// const first = 'Abdul Mazid';
// const last = 'Akash';

// // const result = first + ' ' + last;
// // const result = `My name is ${first} ${last}`;
// // console.log(result);

// // const sentence = `My name is Akash
// // Shakib Al Hasan
// // Mashrafe Bin Mortaza
// // Tamim Iqbal
// // `

// const sentence = 'My name is Akash \n' + 'Shakib Al Hasan \n' + 'Mashrafe Mortaza \n' + 'Tamim Iqbal';

// // console.log(sentence);


// function add(a, b){
// 	return a + b;
// }

// const add1 = function(a, b){
// 	return a + b;
// }

// const add2 = (a, b) => a + b;

// const multiply = (a, b, c, d) => a * b * c * d;

// const divide = (a, b) => a / b;

// const dividing = (a, b) => a % b;
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

// const max = Math.max(3,4,5,6, 5,76, 65);
// console.log(max);

// const numbers1 = [49, 48, 45, 4, 43, 24];
// const nums = Math.max(...numbers1);
// // console.log(...numbers1);
// console.log(nums);

// const friends1 = [23, 43, 56, 76];
// const bondhu = friends1;
// const dosto = [...friends1];
// dosto.push(34, 45);
// console.log(friends1);
// console.log(dosto);

// const sonka = [...friends1, 45, 54];
// console.log(sonka);

// const friend = friends1;
// console.log(...friends1);
// friend.push(34, 43);
// console.log(...friend);
// friends1.push(45, 45,76);
// console.log(...friends1);
// console.log(friend);

// const user = {
// 	name: 'shakib',
// 	age: 34,
// 	profession: 'cricketer',
// }

// const {name, age: boyos} = user;
// console.log(name, boyos);

// const numbers2 = [34, 54];
// const [firsts, second] = numbers2;
// const [x, y] = [23, 44];
// console.log(firsts, second);

// console.log(x, y);

// function doubleThem(a, b){
// 	return [a * 2, b * 2];
// }

// const [prothom, ditiyo] = doubleThem(6, 9);
// console.log(prothom, ditiyo);

// const user = {
// 	name: 'hidayet',
// 	city: 'delhi',
// 	type: 'admin'
// }

// const {name, city, type: shakib} = user;
// console.log(name, city, shakib);

// const employee = {
// 	id: 56,
// 	name: 'james',
// 	dept: 'spy'
// }

// const id = employee.id;
// console.log(id)

// let [num1,,, num3] = [1,2,4, 5, 43];
// console.log(num1, num3);


// function numbers(){
// 	return [1, 3, 4, 6];
// }

// let [num1, num2] = numbers();
// console.log(num1)+

// const glass = {
// 	name: 'glass',
// 	color: 'golden',
// 	price: 123,
// 	isCleaned: true,
// }

// console.log(Object.keys(glass));
// console.log(Object.values(glass))

// const entries = Object.entries(glass);
// console.log(entries);

// delete glass.isCleaned;
// console.log(glass);

// const {price, ...shakib} = glass;
// console.log(shakib)


// Object.freeze(glass);
// Object.seal(glass);
// glass.source = 'bangladesh';
// console.log(glass);
// // delete glass.price;
// glass.price = 5000;
// console.log(glass);

// const numbers0 = [23, 45, 54, 65, 45];
// for (let i = 0; i < numbers0.length; i++){
// 	console.log(i);
// }


// let sentences = 'Shakib al hasan';
// for (let char of sentences){
// 	console.log(char);
// }


// const glass = {
// 	name: 'glass',
// 	color: 'golden',
// 	price: 123,
// 	isCleaned: true,
// }

// for (let product in glass){
// 	console.log(product);
// }

// function printFavouriteNaykaName(){
// 	var nayka = 'Purnima';

// 	if(nayka == 'Purnima'){
		
// 		var nayka = 'Alia Bhatt';
// 		console.log('%c Condition block :: ' + nayka, 'color: red')
// 	}
// 	console.log('%c Functional block ::' + nayka, 'color: green')
// }

// printFavouriteNaykaName()

// function printFavouriteNaykaName1(){
// 	let nayka = 'Purnima';

// 	if(nayka == 'Purnima'){
		
// 		let nayka = 'Alia Bhatt';
// 		console.log('%c Condition block :: ' + nayka, 'color: red')
// 	}
// 	console.log('%c Functional block ::' + nayka, 'color: green')
// }

// printFavouriteNaykaName1()


// let fruits = ['mango', 'apple'];
// let fruitsCopy = [...fruits];

// let fruitse = ['pineApple', 'potato'];

// console.log(fruits, fruitse)
// let fruitsAvg = [...fruits, ...fruitse];
// console.log(fruitsAvg);


// practice task 1

// const multiply = (a, b, c) => a * b * c;

// console.log(multiply(3,4, 4));

//template string

// const template = `I am a Web developer.
// I love to code.
// I love to eat biryani`;

// console.log(template);

//problem task 2

//default parameter

// const defaults = (a, b=2) => a + b;

// console.log(defaults(2));

//problem task 3

// const friends = ['Akash', 'Shakib', 'Tamim', 'Mashrafe'];

// for(let friend of friends){
// 	let even = [];
// 	// console.log(friend);
// 	if(friend.length % 2 === 0){
// 		even.push(friend);
// 		console.log(friend);
// 	}
// }

// function evenFriends(friends){
// 	let even = [];
// 	for(let friend of friends){
// 		if(friend.length % 2 === 0){
// 			even.push(friend);
// 		}
// 	}
// 	return even;
// }

// console.log(evenFriends(['Akash', 'Shakib', 'Tamim', 'Mashrafe']));

// const evenFriends = friends => {
// 	let even = [];
// 	for(let friend of friends){
// 		if(friend.length % 2 === 0){
// 			even.push(friend);
// 		}
// 	}
// 	return even;
// }

// console.log(evenFriends(['Akash', 'Shakib', 'Tamim', 'Mashrafe', 'Musfiq', 'Mahmudullah']))

//problem ta++sk 4



//module 31 practice 
// const {x, y, z, ...others} = {x: 2, y: 4, z: 3, name: 'Shakib', age: 34};

// console.log(x, y, z, others);

// const [first, second, ...remaining] = ['ram', 'sam', 'jodu', 'modu'];
// console.log(first, second, remaining);


// const user = {
// 	id: 4002,
// 	name:  'Shoriful Raj',
// 	address: {
// 		street: {
// 			first: '43/2 uttor side',
// 			second: 'porbag er goli',
// 			third: 'no dorai'
// 		},
// 		city: 'dhaka'
// 	}
// }


// const user2 = {
// 	id: 465,
// 	name: 'pori bibir majar',
// 	address: {
// 		city: 'chittagong',
// 		country: 'bangladesh'
// 	}
// }

// console.log(user.address.street?.second)
// console.log(user2.address.street?.second)

// const numbers = [21, 34, 54, 65, 54];


// const halves = numbers.map(num => num / 2);
// console.log(halves);

// const doubled = numbers.map(num => num * 2);
// const doubled = num => num * 2;
// console.log(doubled);

// const fiveBonus = numbers.map(num => num + 5);
// console.log(fiveBonus);

// const friends = ['akash', 'shakib', 'tamim', 'mashrafe'];
// console.log(friends)
// const lengths = friends.map(friend => friend.length);
// console.log(lengths)

// const firstLetter = friends.map(friend => friend[friend.length - 1]);
// console.log(firstLetter)

// const numbers = [32, 43, 54, 45];

// function doubleIt(num){
// 	console.log('num now', num);
// 	return num * 2;
// }

// console.log(doubleIt(numbers));

// const numbers = [2, 43, 4, 5, 43];
// const result = numbers.forEach(n => console.log(n * 2)) ;

// const result = numbers.filter(p => p < 20)

// const result = numbers.find(p => p > 20)

// console.log(result)

// const numbers = [2, 4, 6, 7, 6];

// const total = numbers.reduce((previous, current) => previous + current, 0);
// console.log(total)

// const num = numbers.reduce((p, c) => p + c, 0);
// console.log(num)

const products = [
	{id: 1, name: 'lenovo', price: 30000},
	{id: 2, name: 'hp', price: 5000},
	{id: 3, name: 'dell', price: 40000},
	{id: 4, name: 'mac', price: 150000}
];

// const product = products.map(p => p.name);
// console.log(product)

// const price = products.map(p => 10000 > p.name);
// console.log(price);

// const price = products.filter(p => p.price > 10000);
// console.log(price)

// const affortable = products.find(p => p.price < 10000)
// console.log(affortable)

// const product = products.reduce((accum, current) => accum + current.price, 0);
// console.log(product)
// class Product {

// 	constructor(name){
// 		this.name = name;
// 	}
// 	country = 'Bangladesh';

// 	speak(talk){
// 		console.log(`talking about ${talk}`)
// 	}
// }

// const lenovo = new Product('le le lenovo');
// console.log(lenovo);

// class Teacher{
// 	constructor(name, subject){
// 		this.name = name;
// 		this.subject = subject;
// 	}
// 	lecture(){
// 		console.log('sir is teaching math')
// 	}
// }

// const tapan = new Teacher('Tapan sir', 'physics');
// console.log(tapan)

// const rashid = new Teacher('Rashid Sir', 'Chemistry');
// console.log(rashid);

// const safwan = new Teacher('Safwan Sir', 'FSD');
// console.log(safwan);

// class Teacher{
// 	constructor(name, subject){
// 		this.name = name;
// 		this.subject = subject;
// 	}
// 	lecture(talk){
// 		console.log(`sir is teaching math ${talk}`);
// 	}
// }

// const tapan = new Teacher('Tapan sir', 'Physics');
// console.log(tapan);
// tapan.lecture('Physics legendary teacher');
// console.log(tapan)

class Vehicle{
	constructor(name, price){
		this.name = name;
		this.price = price;
	}
	move(){
		console.log('ghari chole na chole na chole na re');
	}
};

// class Bus extends Vehicle{
// 	constructor(name, price, seat, ticketPrice){
// 		super(name, price);
// 			this.seat = seat;
// 			this.ticketPrice = ticketPrice;
		
// 	}
// }

// const bus = new Bus('toyota', 1000, 43, 400);
// console.log(bus)
// const bus = new Vehicle('toyota', 21344);
// console.log(bus);

// class Truck extends Vehicle{
// 	constructor(name, price, load){
// 		super(name, price);
// 		this.load = load;
// 	}
// }

// const truck = new Truck('honda', 100000, '400kg');
// console.log(truck);


// class Person{
// 	constructor(name, age){
// 		this.name = name;
// 		this.age = age;
		
// 	}
// 	sleep(){
// 		console.log(`Sleeping now ${this.name}`)
// 	}
// 	activity(){
// 		this.sleep();
// 	}
// }

// const kodom = new Person('shakib', 21);
// console.log(kodom);
// kodom.sleep();
// const badam = new Person('kacha badam', 23);
// console.log(badam);
// badam.sleep();



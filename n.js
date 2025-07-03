// const user = [
//     {id:1, name:"Rama", age:24, isActive:true, salary:40000},
//     {id:2, name:"Ramesh", age:26, isActive:false, salary:4000},
//     {id:3, name:"Rojan", age:29, isActive:true, salary:400000},
//     {id:4, name:"Ramu", age:24, isActive:false, salary:400},
//     {id:5, name:"Ram", age:30, isActive:true, salary:40},
//     {id:6, name:"Rambahadur", age:24, isActive:false, salary:4},
// ]
// // // const new_employes = employes.map(employe => ({
// //     name:employe.name,
// //     bonus_salary: employe.salary * 0.6 + employe.salary
// // }));
// // console.log(new_employes)


// // to increase the salry by 40%
// const bonus_salary= user.map(user=>({
//     ...user,  //"..." is used to take all the data stored in the user
//     salary: user.salary * 140/100
// }));
// console.log(bonus_salary)

//to print the user whoes age is greater than 25 years using filter
// const newUser=user.filter((user => user.age > 25))
// console.log(newUser);

// const onlineUser = user.filter(user => user.isActive === true);
// console.log(onlineUser)

// const totalSalary = user.reduce((acc,user) => (acc + user.isActive),0);
// console.log(totalSalary)


// let products = [
//   { name: "Laptop", price: 800 },
//   { name: "Phone", price: 500 },
//   { name: "Tablet", price: 300 }
// ];
// const newSalary = products.map(product => ({
//     // ...product,
//     name:product.name,
//     price: product.price * 110 / 100,
// }));
// console.log(newSalary)

// const selected = products.filter(product => product.price > 400 );
// console.log(selected)

// const total = products.reduce((acc,product) => acc +product.price,0);
// console.log(total);

// const names = products.map(product => product.name);
// console.log(names);

// const  expensive = products.some(product => {
//   product.price<400
// })
// console.log(expensive)

// let result = products.reduce((accumulator, product) => {
//   if (product.price < 500) {
//     accumulator.under500++;
//   } else {
//     accumulator.overOrEqual500++;
//   }
//   return accumulator;
// }, { under500: 0, overOrEqual500: 0 });

// console.log(result);

//to get the square root 
// let numbers = [2, 4, 6, 8];
// const doubled = numbers.map(number => number **2);
// console.log(doubled)


//filter Even Numbers using .filter

// let numbers = [1, 2, 3, 4, 5, 6];
// const evenNumber = numbers.filter(number => number % 2 === 0);
// console.log(evenNumber);


//3) Total Price of Cart (Using .reduce())

// let cart = [
//   { item: "Book", price: 15 },
//   { item: "Pen", price: 5 },
//   { item: "Bag", price: 25 }
// ];
// const total = cart.reduce((acc,cart) => acc + cart.price,0);
// console.log(total)


//4) Convert Names to Uppercase (Using .map())
// let names = ["alex", "sara", "john"];
// let capital = names.map(name => name.toUpperCase());
// console.log(capital)

//5) Get Names of High-Scoring Students (Filter + Map Chain)

// let students = [
//   { name: "Alex", score: 85 },
//   { name: "Sara", score: 92 },
//   { name: "John", score: 78 }
// ];
// const highScore = students.filter(student => student.score>80);
// const topper = highScore.map(highScore => highScore.name);
// console.log(topper)

//6) Total Length of All Strings (Using .reduce())

// let words = ["apple", "banana", "cherry"];
// const length = words.reduce((acc,word)=> acc+ word.length,0);
// console.log(length)


//7) Filter Products Under $500 (Using .filter())

// let products = [
//   { name: "Laptop", price: 800 },
//   { name: "Phon", price: 500 },
//   { name: "Tablet", price: 300 }
// ];
// // const underProducts = products.filter(product => product.price <= 500);
// // console.log(underProducts)
// // const prices = products.map(product => product.price);
// // console.log(prices)
//  const letter = products.filter(product => product.name.length > 4);
//  console.log(letter)

let votes = ["red", "blue", "red", "green", "blue", "red", "green"];
let result = votes.reduce((acc, color) => {
  if (acc[color]) {
    acc[color]++;
  } else {
    acc[color] = 1;
  }
  return acc;
}, { red: 0, blue: 0, green: 0 });
console.log(result); 

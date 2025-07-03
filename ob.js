// const person = {
//     name: "Rama",
//     age: 28,
//     location:"bkt",
//     weight: 76,
//     salary: 1000000,
//     education: {
//         slc:80,
//         nep:40,
//         science:60
//     }
// }

// person.country = "Norway";
// person.country = "Serai"


// delete person.country;

// console.log(person.education.nep);

// // console.log(person["age"]);
// // console.log(person.name); 

// const persons = [
//     {name:"Rajal",class:10,salary:50000},
//     {name:"Ujwaal",class:15,salary:20000},
//     {name:"Baboi",class:20,salary:10000},
// ]
// persons.forEach(person => {
//     console.log(`My name is ${person.name}. My age  is ${person.age}. My salary ${person.salary}`)
// })

//looping through an object
// let persons = {
//     name:"Rajal",
//     age:26,
//     city:"tokyo"
// };
// // for (let key in person) {
// //     console.log(key + " " + person[key]);
// // }
//   persons.forEach(function(person){
//     console.log("name"+ "age" + "city")
//   })


// let car = {
//   brand: "Toyota",
//   model: "Corolla",
//   year: 2022
// };
// for (let key in car) {
 
//   console.log(key + ": " + car[key])
// }

// let student = {
//   name: "Rajal",
//   age: 26,
//   city: "Tokyo",
//   grade: "A"
// };
// let new_student = Object.keys(student).length;;
// console.log(new_student)


// let students = [
//   { name: "Alex", score: 85 },
//   { name: "Sara", score: 92 },
//   { name: "John", score: 78 }
// ];
// students.forEach((student) => {
//   console.log(student.name + " " + student.score)
// });




//bank deposite and withdraw
// const account = {
//   accountHolder: "Rajal",
//   balance: 60000,
//   deposite(amount)  {
//     this.balance += amount;
//     console.log(`${amount} have been deposited  Your current Balance is $${this.balance}`)
//   },
//   withdraw(amount) {
//     this.balance -= amount;
//     console.log(`${amount} is withdrawed from your account your current Balamce is $${this.balance}`);
//   }

// }
// account.withdraw(50)



let student = {
  name: "Rajal",
  age: 26,
  city: "Tokyo",
  grade: "A"
};
// for(let key in student){
//   console.log(key,student[key])
// }

//with out using for loop
console.log(Object.keys(student));
console.log(Object.values(student));
console.log(Object.entries(student));


//to store data in Json so that it can be stored in Json and can be used in other programming lang aswell like pythone java c++

const studentJson = JSON.stringify(student);
console.log(studentJson)

const new_student = JSON.parse(studentJson);
console.log(new_student)
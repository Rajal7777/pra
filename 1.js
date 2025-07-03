// class Car {
//     constructor(name, color) {
//         this.brand = name;
//         this.color = color;
//     }
// }
// const myCar = new Car("Toyota", "blue");
// console.log(myCar.brand);
// console.log(myCar.color);



// const color= ["red", "blue", "green"];
// const col = color.map((c) => {
//     return { color: c };
//     console.log("c")
// });



// const random = Math.random();
// console.log(random);
// const randomNumber = Math.floor(random * 10) +1 ;
// console.log(randomNumber);


// class Person {
//     constructor(name, age) {
//         this.name = "rama";
//         this.age = 45;
//     }
// }

// const person = new Person("John", 30);
// console.log(person.name);

// console.log("1");
//  setTimeout(() =>{
//     console.log("2");   
//  })

//  Promise.resolve().then(() => {
//     console.log("3");
//  });
//  console.log("4");

let myPromise = new Promise(function(resolve, reject) {
  let success = true;

  if(success) {
    resolve("Data loaded successfully!");
  } else {
    reject("Failed to load data!");
  }
});

function myDisplayer(result) {
  console.log(result);
}

myPromise.then(
  function(value) { myDisplayer(value); },  // Success
  function(error) { myDisplayer(error); }   // Error
);

// const numbers= [40,50,80,70,90];
// const passed = numbers.map(number=> number%2==0?"yes":"no");
// console.log(passed)




// to print the words containing a in the word from the array

// const programs =['java','javascript','c++', "pythone"]
// const show = programs.filter(program => program.match('p'))
// console.log(show)
  

//to get the numbers from the array

// const mixes=[10,40,50,"rama",1,"sayaama"];
// const numbers = mixes.filter(value => typeof value == "string")  //if we dont have singuar form for mixed so we can use like index or value in case there is nothing
// console.log(numbers)




//  const numbers= [40,50,80,70,90];
//  numbers.forEach(number => {
    // console.log(number + ` i am the mna`)
//  });

//reduce()

// const numbers = [10,20,30,40,50];
// const sum = numbers.reduce((acc,number)=> acc+ number,0);
// console.log(typeof(sum));
// console.log(typeof(numbers));


// const numbers = [10,20,30,80,100,2,500,40,50];
// const maximum = numbers.reduce((acc,number) => (acc>number?acc:number))
//  /// numbers.reduce((a,b) => (a>b?a:b)) short form and also keep the ternary operators inside()
// console.log(maximum)


//to join the strings
// const words = ["I", "like", "you"];
// const sentence = words.reduce((acc,word) => acc + " " + word );
// const last = (sentence + " baboi")
// console.log(last)

// console.log(sentence)

// const numbers = [10,20,30,40]
// const total = numbers.reduce((acc,number) => acc + number,0);
// console.log(total)


let cart = [
  { item: "Shoes", price: 50 },
  { item: "Shirt", price: 30 },
  { item: "Jeans", price: 60 }
];
const price = cart.reduce((acc,cart) => {
    return acc + cart.price;},0);
// console.log(price)
console.log("Total Price:", price);

// Since the inception of JS
// var myVariableWithVar = 'My string in a var :D';

// // Since ES6
// let myLetVariable;
// // console.log(myLetVariable);
// const myConstant = "I won't change!";

// var myVariableWithVar = 'I got a new value now!';

// console.log(myLetVariable);

// if (true) {
//   let ponyta = 'Rapidash';
//   var articuno = 0;
//   console.log(ponyta);
//   // console.log(rapidash);
// }

// var articuno = 'Articuno';
// let ponyta = 'Ponyta';

// function scopePokemon() {
//   let ponyta = 'Rapidash';
//   var articuno = 0;
//   console.log('Inside the function', ponyta);
//   console.log('Inside the function', articuno);
// }

// scopePokemon();

// console.log('In global scope', ponyta);
// console.log('In global scope', articuno);
// // console.log(rapidash);

// const myNum = 4;

// if (myNum === 5) {
//   console.log('The number is equal to 5');
// } else if (myNum > 5) {
//   console.log('The number is greater than 5');
// } else {
//   console.log('The number is lesser than 5');
// }

// // condition ? if true, do this : if false, do this
// myNum === 5
//   ? console.log('The number is equal to 5')
//   : console.log('The number is not 5');

// const startingPoke = 'Charmander';
// const pokemon = 'Articuno';

// switch (pokemon) {
//   case 'Pikachu':
//     if (startingPoke === 'Charmander')
//       console.log('You got the red edition dont you :D');
//     console.log('You are probably Ash');
//     break;
//   case 'Articuno':
//     console.log('You need a master ball for this one!');
//     break;
//   default:
//     console.log("I didn't guess the right pokemon! :(");
// }

//              [   0    ,    1     ,   2   ]
// const myArray = ['Lilian', 'Timofey', 'Anton'];

// // console.log(myArray.size);

// // ES5 functions
const myPieceOText = 'I am a very interesting read';

// function nameOfFunction (parameters) {body of function}
function myFirstFunction(firstArgument) {
  let secretPokemon = 'Mew';
  console.log(firstArgument.length);
  return [secretPokemon, firstArgument];
}

myFirstFunction(myPieceOText);
console.log(myFirstFunction(myPieceOText));
const theSecretPokemon = myFirstFunction(myPieceOText);

// // ES6 functions

// const myArrowFunction = (param) =>
//   console.log('I was told to say this: ', param);

// myArrowFunction('I have evolved to ES6!');

// for (starting point; condition; incrementer) {}
// for (let i = 0; i <= 5; i++) {
//   console.log(i);
// }

// let myNum = 0;

// // while (myNum < 5) {
// //   if (Math.random() > 0.5) myNum++;
// //   console.log(myNum);
// // }

// // do {
// //   console.log(myNum);
// // } while (myNum < 0);

// const myArray = ['Rohan', 'Timofey', 'Anton'];

// myArray.forEach((item) => console.log(item + ' ' + 0));

// (" I don't like this ");
// ('I love this quote: ');

// console.log(`${myArray[0]} is super smart!`);

// const myArrayOfFunctions = [
//   () => console.log('First Item!'),
//   () => console.log('Second Item!'),
// ];

// myArrayOfFunctions.forEach((item) => item());

console.log('***** Function Practice *****');

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName(name) {
  return 'Hello, ' + name;
}
// Remember to call the function to test

console.log(helloName('Farhan'));

// 3. Function to add two numbers together & return the result
function addNumbers(firstNumber, secondNumber) {
  // return firstNumber + secondNumber;
  return firstNumber + secondNumber;
}
//let sum = firstNumber + secondNumber;
let sum = addNumbers(2, 3);
console.log(sum);

// 4. Function to multiply three numbers & return the result
function multiplyThree(num1, num2, num3) {
  return num1 * num2 * num3;

}
let result = multiplyThree(2, 3, 4);
console.log(result);


// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive(number) {
  if (number > 0) {
    return true;
  } 
  else  {
  return false
  }
}
  console.log(isPositive(2));
  console.log(isPositive(-3));
  console.log(isPositive(0));

// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
function getLast(array) {
  if(array.length>0){
  return array [array.length-1];
}
else{
  return undefined;
}
}
console.log(getLast([]));
console.log(getLast([2, 4, 5]));
console.log(getLast([0, 1, -1]));




// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
function find(value, array) {
  for(let i=0; i<array.length; i++){
    if(value===array[i]){
      return true
    }
      
    }
    return false;
  }

console.log(find(2,[2,4,5,8]));
console.log(find(5,[2,4,5,8]));
console.log(find(3,[2,4,5,8]));




// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
 
    if(string.length>0 && letter === string[0]){
      return true;
    }
    return false
  }



console.log(isFirstLetter('A', 'Adam'));
console.log(isFirstLetter('B', 'Adam'));
console.log(isFirstLetter('O', 'John'));



// 9. Function to return the sum of all numbers in an array
function sumAll(array) {
  let sum = 0;
  // TODO: loop to add items
  for(let j=0; j<array.length; j++){
    sum+= array[j];
  }
  // TODO: return the sum
  return sum;
}

console.log(sumAll([3,5,6,9]));
console.log(sumAll([7,5,10,11]));
console.log(sumAll([1,2,3,4,5,6,7,8,9,10]));


 

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
function allPositive() {

}


// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!

// A function that takes the age in years and return the age in days
function calcAge(age){
  let days; 
  // convert age in years to days and returns total days 
  return days = age*365 
  //  
  

}
// test cases output 
console.log(calcAge(3));
console.log(calcAge(10));
console.log(calcAge(27));
console.log(calcAge(4));


// DO NOT MODIFY
// Used for automated testing
try {
  module.exports = {
    hello,
    helloName,
    addNumbers,
    multiplyThree,
    isPositive,
    getLast,
    find,
    isFirstLetter,
    sumAll,
    allPositive,
  };
} catch (e) {
  // Do nothing
}

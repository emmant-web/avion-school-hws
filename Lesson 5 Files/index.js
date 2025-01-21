// Do not change any of the function names

//Example 1:
function getBiggest(x, y) {
    // x and y are integers.  Return the larger integer
    // if they are the same return either one

    if (x > y){
        return x;
    } else if (x < y){
        return y;
    } else{
        return x || y;
    }

  }

  getBiggest(6, 7);
  

  function greeting(language) {
    // return a greeting for three different languages:
    // language: 'German' -> 'Guten Tag!'
    // language: 'Mandarin' -> 'Ni Hao!'
    // language: 'Spanish' -> 'Hola!'
    // if language is undefined return 'Hello!'

    if (language === 'German'){
        return 'Guten Tag!';
    } else if (language === 'Mandarin'){
        return 'Ni Hao!';
    } else if (language === 'Spanish'){
        return 'Hola!';
    } else {
        return 'Hello!';
    }
  }

  greeting('German');
  

  function isTenOrFive(num) {
    // return true if num is 10 or 5
    // otherwise return false

    if (num === 10 || num === 5){
        return true;
    } else{
        return false;
    }
  }

  isTenOrFive(10);
  
  function isInRange(num) {
    // return true if num is less than 50 and greater than 20
    // otherwise return false

    if (num < 50 && num > 20){
        return true;
    } else {
        return false;
    }
  }

  isInRange(21);

  
  function isInteger(num) {
    // return true if num is an integer
    // 0.8 -> false
    // 1 -> true
    // -10 -> true
    // otherwise return false
    // hint: you can solve this using Math.floor

    if (num === Math.floor(num)){
        return true;
    }

    return false;

  }


  
  function fizzBuzz(num) {
    // if num is divisible by 3 return 'fizz'
    // if num is divisible by 5 return 'buzz'
    // if num is divisible by 3 & 5 return 'fizzbuzz'
    // otherwise return num


    if (num % 15 === 0){
        return 'fizzbuzz';
    } else if (num % 5 === 0){
        return 'buzz'
    } else if (num % 3 === 0){
        return 'fizz'
    } else {
        return num;
    }
  }

  fizzBuzz(90);
  
  function isPrime(num) {
    // return true if num is prime.
    // otherwise return false
    // hint: a prime number is only evenly divisible by itself and 1
    // hint2: you can solve this using a for loop
    // note: 0 and 1 are NOT considered prime numbers

    if (num < 2){   
        return false; //return false because any number lesser than 2 is not a prime number
    }

    for( i = 2; i <= Math.sqrt(num); i++){ // tests it like this (num % 2 === 0) then (num % 3 === 0) then so on until it reaches the nearest square of the number 
        if (num % i === 0){ 
            return false; // returns false because if the number is divisible by other numbers other than 1 and itself it it not prime
        }
    }

    return true; // return true is the number isn't divisible by any other number (only by 1 and itself)
  }

  isPrime(37);
  
  // Do not modify code below this line.
  // --------------------------------
  
  module.exports = {
    getBiggest,
    greeting,
    isTenOrFive,
    isInRange,
    isInteger,
    fizzBuzz,
    isPrime,
  };
  
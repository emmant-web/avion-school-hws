// Do not change any of the function names

function returnFirst(arr) {
    // return the first item from the array
    return arr[0];
  }

  console.log(returnFirst(['yes', 'no', 'maybe']));


  
  function returnLast(arr) {
    // return the last item of the array
    return arr[arr.length -1];
  }

  console.log(returnLast(['yes', 'no', 'maybe']));


  
  function getArrayLength(arr) {
    // return the length of the array
    return arr.length;
  }

  console.log(getArrayLength(['yes', 'no', 'maybe']));







  function incrementByOne(arr) {
    // arr is an array of integers
    // increase each integer by one
    // return the array

    for (i = 0; i < arr.length; i++){
        arr[i] = arr[i] + 1;
    }

    return arr;
  }

  console.log(incrementByOne([1, 2, 3]));

  


  function addItemToArray(arr, item) {
    // add the item to the end of the array
    // return the array

    arr.push(item);
    return arr;
  
  }

  console.log(addItemToArray(['dog', 'cat'], 'tiger'))
  

  function addItemToFront(arr, item) {
    // add the item to the front of the array
    // return the array
    // hint: use the array method .unshift

    arr.unshift(item);
    return arr;
  }

  console.log(addItemToFront(['dog', 'cat'], 'tiger'))
  


  function wordsToSentence(words) {
    // words is an array of strings
    // return a string that is all of the words concatenated together
    // spaces need to be between each word
    // example: ['Hello', 'world!'] -> 'Hello world!'

return words.join(' ');
  }

  console.log(wordsToSentence(['hello', 'world', 'of', 'coding']));

  
  function contains(arr, item) {
    // check to see if item is inside of arr
    // return true if it is, otherwise return false

    // long way
    if (arr.includes(item)){
        return true;
    } else {
        return false;
    }    


    // // shorter way
    // return arr.includes(item);
  }


  console.log(contains([1, 2, 3, 4], 4));



  
  function addNumbers(numbers) {
    // numbers is an array of integers.
    // add all of the integers and return the value
   return numbers.reduce(function (acc, cur){
    return acc + cur;
   }, 0);
  }


  console.log(addNumbers([1, 2, 3, 4]));



  
  function averageTestScore(testScores) {
    // testScores is an array. Iterate over testScores and compute the average.
    // return the average

    const total = testScores.reduce(function(acc, cur){
        return acc + cur;
    }, 0);

    return total/ testScores.length;
  }

  console.log(averageTestScore([1,2,3,4,5,6]));

  



  function largestNumber(numbers) {
    // numbers is an array of integers
    // return the largest integer
    return Math.max(...numbers);

  }

  console.log(largestNumber([1,2,3,4,5,6]));

  
  function multiplyArguments() {
    // use the arguments keyword to multiply all of the arguments together and return the product
    // if no arguments are passed in return 0
    // if one argument is passed in just return it

    if (arguments.length === 0){
        return 0;
    }


    if (arguments.length === 1){
        return arguments[0];
    }


    let product = 1;


    for (let i = 0; i < arguments.length; i++){
        product = product * arguments[i];

    }


    return product;
  }

  console.log(multiplyArguments(1,2,3,4));



  // Do not modify code below this line.
  // --------------------------------
  
  module.exports = {
    returnFirst,
    returnLast,
    getArrayLength,
    incrementByOne,
    addItemToArray,
    addItemToFront,
    wordsToSentence,
    contains,
    addNumbers,
    averageTestScore,
    largestNumber,
    multiplyArguments,
  };
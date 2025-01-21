// Do not change any of the function names

function invokeCallback(cb) {
  // invoke cb
  cb();
}



function sumArray(numbers, cb) {
  // sum up all of the integers in the numbers array
  // pass the result to cb
  // no return is necessary

  const sum = numbers.reduce((acc, curr) => {
    return acc + curr;
  }, 0);

  cb(sum);

}

function forEach(arr, cb) {
  // iterate over arr and pass its values to cb one by one
  // hint: you will be invoking cb multiple times (once for each value in the array)
  arr.forEach(cb);

}

function map(arr, cb) {
  // create a new array
  // iterate over each value in arr, pass it to cb, then place the value returned from cb into the new arr
  // the new array should be the same length as the array argument

  const num = []
  
  arr.forEach(
    
    function (item){
    num.push(cb(item))
  }
);

  return num;

}


// a callback function = passing a function into other functions

module.exports = {
  invokeCallback,
  sumArray,
  forEach,
  map,
};
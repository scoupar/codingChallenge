const splitArray = (array, size) => {
  //error messages in case of requirements not being met
  if (array.length <= 0) {
    return "This array is empty and can not be split";
  } else if (size <= 0) {
    return "Please enter a positive number";
  } else {
    let result = [];
    //get the length of the array divided by the size (rounded up to the nearest integer)
    let divider = Math.ceil(array.length / size);
    //loop over the array, until i is greater than the length of the array. After each loop and the divider amount to i
    for (let i = 0; i < array.length; i += divider) {
      // in each loop use slice to create a new array from the values between i and i + the divider value - this will create an equal number of arrays
      let subArray = array.slice(i, i + divider);
      //add each subArray to the result array
      result.push(subArray);
    }
    return result;
  }
};

const array = [1, 2, 3, 4, 5];
const n = 3;
console.log(splitArray(array, n));

module.exports = splitArray;

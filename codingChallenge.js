const splitArray = (array, size) => {
  if (array.length <= 0) {
    return "This array is empty and can not be split";
  } else if (size <= 0) {
    return "Please enter a positive number";
  } else {
    let result = [];
    let divider = Math.ceil(array.length / size);
    console.log(divider);
    for (let i = 0; i < array.length; i += divider) {
      let subArray = array.slice(i, i + divider);
      result.push(subArray);
    }
    return result;
  }
};

const array = [1, 2, 3, 4, 5];
const n = -1;
console.log(splitArray(array, n));

module.exports = splitArray;

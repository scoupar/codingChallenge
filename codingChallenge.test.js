const splitArray = require("./codingChallenge");

test("it splits an array into n equal arrays given an array that can be divided by n", () => {
  const array = [1, 2, 3, 4, 5, 6];
  const n = 3;
  const result = splitArray(array, n);
  expect(result).toEqual([
    [1, 2],
    [3, 4],
    [5, 6],
  ]);
});

test("it splits an array into n equal arrays with a remainder given an array that can not be divided equally by n", () => {
  const array = [1, 2, 3, 4, 5];
  const n = 3;
  const result = splitArray(array, n);
  expect(result).toEqual([[1, 2], [3, 4], [5]]);
});

test("it returns an error if given an empty array", () => {
  const array = [];
  const n = 3;
  const result = splitArray(array, n);
  expect(result).toEqual("This array is empty and can not be split");
});

test("it returns an error if n is a negative number", () => {
  const array = [1, 2, 3, 4, 5];
  const n = -2;
  const result = splitArray(array, n);
  expect(result).toEqual("Please enter a positive number");
});

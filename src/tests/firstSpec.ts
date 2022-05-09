import arrays from "../utils/array";
import numbers from "../utils/numbers";
import strings from "../utils/strings";

const numArr = [3, 4, 5, 6];
const wordArr = ["cat", "dog", "rabbit", "bird"];
// const arrSum = arrays.addArr(numArr);
// const mixArr = arrays.concatArr(numArr, wordArr);
// const myNum = ("15" as unknown as number) % 2;
// const five = parseInt("5");

describe("Suite Description", () => {
  it("should capitalize a string", () => {
    expect(strings.capitalize("a string of books")).toEqual("A String Of Books");
  });

  it("should change strings to uppercase", () => {
    expect(strings.upperCase("i love typescript")).toEqual("I LOVE TYPESCRIPT");
  });
  it("should change strings to lowercase", () => {
    expect(strings.lowerCase("I LOVE TYPESCRIPT")).toEqual("i love typescript");
  });
  it("should join two strings", () => {
    expect(strings.concat(wordArr[0], wordArr[1])).toEqual(wordArr[0].concat(wordArr[1]));
  });
  it("should multiply two numbers", () => {
    expect(numbers.multiply(5, 4)).toEqual(20);
  });
  it("should add two numbers", () => {
    expect(numbers.sum(5, 4)).toBeGreaterThan(5);
  });
  it("should divide two numbers", () => {
    expect(numbers.divide(10, 2)).toBeGreaterThan(0);
  });
  it("should square a number", () => {
    expect(numbers.square(numArr[2])).toEqual(numArr[2] * numArr[2]);
  });
  it("joins two arrays", () => {
    expect(arrays.concatArr(numArr, wordArr)).toEqual([...numArr, ...wordArr]);
  });
  it("should not contain the 3rd index", () => {
    expect(arrays.cut3([2, 4, 5, 6, 7])).not.toContain(5);
  });
});

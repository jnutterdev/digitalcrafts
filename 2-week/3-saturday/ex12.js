/* 
Sum an array
Write a function sum that takes an array of numbers as argument and 
returns the sum of those numbers. Use the reduce method to do this.

> sum([1, 2, 3])
6
*/

const num = [1, 2, 3];

sumOfArray = (total, num) => {
    return total + num;
};

let addednum = num.reduce(sumOfArray);

console.log(addednum);
var arr = [0, 1, 2, 3, 4, 5];
var brandNewArray = [];
arr.forEach(function(element) {
    brandNewArray.push(element + 2);
});


console.log(arr);
console.log(brandNewArray);

var hasGreaterThanTwo = arr.some(function(element) {
    return element > 2;
})

console.log(hasGreaterThanTwo); // returns a boolean value
// var arr = [0, 1, 2, 3, 4, 5];
// var arr = ["this", "is", "my", "first", "array"];

// var mapFunction = function(element) {
//     console.log(`Running array map callback function on element: ${element}`);
//     return element + 2;
// }

// var newArr = arr.map(mapFunction);

// var filteredArray = arr.filter(function(element) {
//     console.log(`Running array filter callback function on element: ${element}`);
//     return element < 2;
// })

// console.log(arr);
// console.log(newArr);
// console.log(filteredArray);

// var forEachArray = arr.forEach(function(element) {
//     console.log(element);
// });


var arr = [0, 1, 2, 3, 4, 5];
var brandNewArray = [];
arr.forEach(function(element) {
    brandNewArray.push(element + 2);
});


console.log(arr);
console.log(brandNewArray);
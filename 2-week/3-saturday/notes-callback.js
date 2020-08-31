var arr = [0, 1, 2, 3, 4, 5];

var mapFunction = function(element) {
    console.log(`Running array map callback function on element: ${element}`);
    return element + 2;
}

var newArr = arr.map(mapFunction);

console.log(arr);
console.log(newArr);
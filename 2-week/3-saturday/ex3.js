var myArr = [1, 2, 3];

function returnEven(arr) {
    return arr.map(function(element) {
        return element * element;
    });
}

console.log(returnEven(myArr));
var myArr = [-4, -3, -1, 0, 4, 7, 8, 9];

function returnEven(arr) {
    return arr.filter(function(element) {
        return element % 2 == 0;
    });
}

console.log(returnEven(myArr));
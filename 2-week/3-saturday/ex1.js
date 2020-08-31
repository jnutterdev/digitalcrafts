var myArr = [-4, -3, -1, 0, 4, 7, 8, 9];

function returnPos(arr) {
    return arr.filter(function(element) {
        return element >= 0;
    });
}

console.log(returnPos(myArr));
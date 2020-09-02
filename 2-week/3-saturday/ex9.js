var arr = [
    [1, 3, 4],
    [2, 4, 6, 8],
    [3, 6]
];

function sumOfArrays(total, num) {
    return total + num;
}

function reduceArrays(a, b) {
    let A = a.reduce(sumOfArrays);
    let B = b.reduce(sumOfArrays);
    return A - B;
}

function sortArrays(arr) {
    return arr.sort(reduceArrays);
}
console.log(sortArrays(arr));
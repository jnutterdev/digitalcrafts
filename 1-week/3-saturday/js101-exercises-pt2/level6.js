function lvl6exercise1(num) {
    // Return 'hello' if num is 1, 'world' if num is 2, otherwise return 'bye'
    if (num == 1) {
        console.log('hello');
    } else if (num == 2) {
        console.log('world');
    } else {
        console.log('bye');
    }
}
lvl6exercise1(1)
lvl6exercise1(2)
lvl6exercise1(4)

function lvl6exercise2() {
    // Push 10 'hello' strings into the array using a for loop, then return it
    var arr = [];
    for (i = 0; i < 10; i++) {
        arr.push('hello');
    }
    console.log(arr);
}
lvl6exercise2()

function lvl6exercise3() {
    // Empty this array using a while loop and return it
    var arr = ['hello', 'hello', 'hello', 'hello', 'hello', 'hello', 'hello', 'hello', 'hello', 'hello'];
    let i = arr.length;
    while (i--) {
        arr.pop();
    }
    console.log(arr);
}
lvl6exercise3()
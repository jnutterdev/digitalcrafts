let myArray = ["This", "is", "my", "sentence", "Thissssss", "that", "in", "out", "in"];

function findItems(someArray) {
    var counterObject = {};


    for (let i = 0; i < someArray.length; i++) {
        var currentItem = someArray[i];

        if (!counterObject[currentItem]) {
            counterObject[currentItem] = 1;
        } else {
            counterObject[currentItem]++;
        }
        console.log(counterObject);
    }
}

findItems(myArray)
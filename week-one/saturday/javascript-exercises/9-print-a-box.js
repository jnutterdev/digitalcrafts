function printBox(width, height) {
    let heightOfBox = [];

    // print top of box
    console.log("#".repeat(width));

    // print out the sides
    for (let i = 1; i <= height; i++) {
        console.log(heightOfBox.push("%"));
    }
    // print out the bottom of the box
    console.log("#".repeat(width));
}

printBox(5, 5);
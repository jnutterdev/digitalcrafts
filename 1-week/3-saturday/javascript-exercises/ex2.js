function printBox(width, height) {
    var asterix = "*";
    var middleRowTemplate = "*" + " ".repeat(width - 2) + "*";
    console.log(asterix.repeat(width));
    for (i = 0; i < height - 2; i++) {
        console.log(middleRowTemplate);
    }
    console.log(asterix.repeat(width));
}
printBox(7, 7);
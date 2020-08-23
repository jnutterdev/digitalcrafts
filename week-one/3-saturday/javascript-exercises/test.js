function printBox(boxWidth, boxHeight) {
    for (i = 0; i <= boxWidth; i++) {
        for (j = 0; j <= boxHeight; j++) {
            console.log("*");
            if (i == 0 || i == boxWidth ||
                j == 0 || j == boxHeight) {
                console.log("*");
            } else {
                console.log(" ");
            }
        }
        console.log("\n");
    }
}

printBox(3, 3);
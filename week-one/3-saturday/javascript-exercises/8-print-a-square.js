function printSquare(sizeOfBox) {
    for (i = 1; i <= sizeOfBox; i++) {
        console.log("*".repeat(sizeOfBox + 4));
    }
}

printSquare(6);
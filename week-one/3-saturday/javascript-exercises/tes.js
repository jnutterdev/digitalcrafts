function printBox(width, height) {
    for (var i = 0; i < width; i++) {
        for (var j = 0; j < height; j++) {
            if (i == 0 || i == width - 1 || j == 0 || j == height - 1) {
                process.stdout.write("*")
            } else {
                process.stdout.write(" ")
            }
        }
        process.stdout.write("\n")
    }
}

printBox(5, 3);
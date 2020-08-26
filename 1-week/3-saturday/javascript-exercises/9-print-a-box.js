/*

Node will automatically add a linebreak when rendering console.log. So to avoid this, 
using process.stdout.write will process the string without those line breaks.

*/

function printBox(height, width) {
    for (var i = 0; i < height; i++) {
        for (var j = 0; j < width; j++) {
            if (i == 0 || i == height - 1 || j == 0 || j == width - 1) {
                process.stdout.write("*")
            } else {
                process.stdout.write(" ")
            }
        }
        process.stdout.write("\n")
    }
}

printBox(5, 3);
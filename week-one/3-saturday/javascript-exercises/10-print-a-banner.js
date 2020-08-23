/*

Write a function printBanner which is given some text and prints a banner with a border surrounding 
the text. The border has to stretch to the length of the text.

> printBanner('Welcome to DigitalCrafts') 
**************************** 
* Welcome to DigitalCrafts * 
****************************

*/

function printBanner(text) {
    let size = text.length + 4; // size of text plus additional padding for text

    for (j = 1; j <= 3; j++) {
        if (j == 2) {
            console.log(`* ${text} *`);
        } else {
            console.log("*".repeat(size));
        }
    }
}
printBanner("Welcome to DigitalCrafts");
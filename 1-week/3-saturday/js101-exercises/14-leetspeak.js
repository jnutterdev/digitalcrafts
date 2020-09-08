/*
Write a function leetspeak which is given a string, and returns the leetspeak equivalent of the string. To convert text to its leetspeak version, make the following substitutions:

A => 4
E => 3
G => 6
I => 1
O => 0
S => 5
T => 7
> leetspeak('Leet') l337
*/
// var chars = {
//     a: 4,
//     e: 3,
//     g: 6,
//     i: 1,
//     o: 0,
//     s: 5,
//     t: 7,
// }
var leetspeak = function(word) {

    var leetWord = "";

    for (var i = 0; i < word.length; i++) {
        if ((word.charAt(i).toLowerCase() === "a") && (i != 0)) {
            leetWord = leetWord.concat("4");
        } else if (word.charAt(i).toLowerCase() === "e") {
            leetWord = leetWord.concat("3");
        } else if (word.charAt(i) === "g") {
            leetWord = leetWord.concat("6");
        } else if (word.charAt(i).toLowerCase() === "i") {
            leetWord = leetWord.concat("1");
        } else if (word.charAt(i).toLowerCase() === "0") {
            leetWord = leetWord.concat("0");
        } else if (word.charAt(i).toLowerCase() === "s") {
            leetWord = leetWord.concat("5");
        } else if (word.charAt(i).toLowerCase() === "t") {
            leetWord = leetWord.concat("7");
        } else {
            leetWord = leetWord.concat(word.charAt(i));
        }
    }

    return leetWord;

};


console.log(leetspeak("Leet hacker dude"));
let width = 5;
let height = 6;

let boxTop = "#".repeat(width);
let boxLSide = boxTop.charAt(0);
let boxMid = "";
let boxRSide = boxTop.charAt(boxTop);

for (i = 1; i < boxTop; i++) {
    let boxMid = boxTop.replace("#", " ");
    console.log(boxMid);
}
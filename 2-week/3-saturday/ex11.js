let hello = () => { return "Hello, world! "; };
let num = 0;

function callNTimes(num, hello) {
    for (i = 0; i < num; i++) {
        console.log(hello);
    }
}


callNTimes(5, hello());
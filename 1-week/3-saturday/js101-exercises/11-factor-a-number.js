/* 
Write a function factors which is given a number and returns an array 
containing all its factors. What are factors?
*/

function factorANumber(num) {
    let factorsOfNum = [];
    for (i = 0; i <= num; i++) {
        if (num % i == 0) {
            factorsOfNum.push(i);
        }
    }
    console.log(factorsOfNum);
}

factorANumber(144);
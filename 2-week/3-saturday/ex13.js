/*
Acronym
Write a function acronym that takes an array of words as argument and
 returns the acronym of the words. Use the reduce method to do this.

> acronym(['very', 'important', 'person'])
'VIP'
> acronym(['national', 'aeronautics', 'space', 'administration'])
'NASA'
*/

let acroOne = ['very', 'important', 'person'];
let acroTwo = ['national', 'aeronautics', 'space', 'administration'];

function acronyms(input) {
    return input.map((word) => word[0].toUpperCase()).join('');
}

console.log(acronyms(acroOne));
console.log(acronyms(acroTwo));
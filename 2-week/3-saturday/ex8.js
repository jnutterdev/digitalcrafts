var people = [
    'Dom',
    'Lyn',
    'Kirk',
    'Autumn',
    'Trista',
    'Jesslyn',
    'Kevin',
    'John',
    'Eli',
    'Juan',
    'Robert',
    'Keyur',
    'Jason',
    'Che',
    'Ben'
];

var pplSort = people.sort(function(a, b) {
    console.log(a, b);
    return a.length - b.length;
});

console.log(pplSort);
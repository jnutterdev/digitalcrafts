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

function greetPeople(arr) {
    arr.forEach(function(element) {
        console.log(`Good job, ${element}!`);
    });
}

greetPeople(people);
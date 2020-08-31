var cities = [
    { name: 'Los Angeles', temperature: 60.0 },
    { name: 'Atlanta', temperature: 52.0 },
    { name: 'Detroit', temperature: 48.0 },
    { name: 'New York', temperature: 80.0 }
];

function returnCoolCities(arr) {
    return arr.filter(function(element) {
        return element.temperature < 70;
    });
}
console.log(returnCoolCities(cities));
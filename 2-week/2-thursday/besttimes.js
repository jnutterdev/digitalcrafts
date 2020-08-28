// the function will get processed in memory first, then the variables below that


function findBestTimes(times) {
    // my code goes here, do something
    var results = {}; // create an empty object

    for (let i = 0; i < times.length; i++) { // times parameter gets turned into a loop
        console.log("current loop:" + i); // prints out the current loop we're on
        var currentRecord = times[i]; // creates a variable storing the 
        console.log("currentRecord: ", currentRecord); // 


        if (!results[currentRecord.country]) {
            console.log("key does not exist. creating key " + currentRecord.country)
            results[currentRecord.country] = currentRecord.time;
        } else {
            console.log("key exists " + currentRecord.country);
            // compare the two times in the keys of both objects.
            if (currentRecord.time < results[currentRecord.country]) {
                console.log("old time is slower, updating time to: " + currentRecord.time);
                results[currentRecord.country] = currentRecord.time;
            }
        }

        console.log('new currentRecord: ', results);
        console.log("-------------------------------------");
    }

    return results;
}

var olympics2000 = [
    { country: "USA", time: 244 }, // loop 0
    { country: "Poland", time: 232 }, // loop 1
    { country: "USA", time: 222 }, // loop 2
    { country: "Australia", time: 144 }, // loop 3
    { country: "Australia", time: 254 }, // loop 4
    { country: "USA", time: 143 } // loop 5
];

console.log(findBestTimes(olympics2000));
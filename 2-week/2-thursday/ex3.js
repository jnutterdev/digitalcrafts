var olympics2000 = [
    { country: "USA", time: 233 },
    { country: "Poland", time: 222 }
];

console.log(findBestTimes(olympics2000));
// console.log(`${countries[0].country} with a best time of ${countries[0].time}`);
// console.log(`${countries[1].country} with a best time of ${countries[1].time}`);

function findBestTimes(times) {
    let results = {};

    for (let i = 0; i < times; i++) {

        console.log("current loop:" + i);
        var currentRecord = times[i];
        console.log("current record: ", currentRecord);

        if (!results[currentRecord.country]) {
            console.log("Key does not exist. Creating key " + currentRecord.country)
            results[currentRecord.country] = currentRecord.time;
        } else {
            console.log("Key exists " + currentRecord.country);

            if (currentRecord.time < results[currentRecord.country]) {
                console.log("old time is slower, updating time to: " + currentRecord.time);
                results[currentRecord.country] = currentRecord.time;
            }
        }
        console.log("new current record: ", results);
    }
    return results;
}


findBestTimes()
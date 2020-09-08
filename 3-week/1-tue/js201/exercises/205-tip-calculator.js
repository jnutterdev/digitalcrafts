// Write a function "tipAmount" that is given the bill amount and the level of
// service (one of good, fair and poor) and returns the dollar amount for the tip.
//
// Based on:
// good --> 20%
// fair --> 15%
// poor --> 10%
//
// Examples:
// tipAmount(100, 'good') --> 20
// tipAmount(40, 'fair') --> 6

const levelOfService1 = { good: 0.20, fair: 0.15, poor: 0.1 };

function tipAmount(billAmount, levelOfService) {

    let tipCalculation = billAmount * levelOfService;
    return tipCalculation;
}

console.log(tipAmount(100, levelOfService1['good']));
console.log(tipAmount(40, levelOfService1['fair']));

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "totalAmount" that takes the same arguments as "tipAmount"
// except it returns the total as the tip amount plus the bill amount.
// Hint: this function may use "tipAmount" internally
//
// Examples:
// totalAmount(100, 'good') --> 120
// totalAmount(40, 'fair') --> 46

const levelOfService2 = { good: 0.20, fair: 0.15, poor: 0.1 };

function totalAmount(billAmount, levelOfService2) {
    tipCalculation = billAmount * levelOfService2;
    totalBill = billAmount + tipCalculation;
    return totalBill;
}

console.log(totalAmount(100, levelOfService2['good']));
console.log(totalAmount(40, levelOfService2['fair']));

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "splitAmount" that takes a bill amount, the level of service,
// and the number of people to split the bill between. It should return the final
// amount for each person.
//
// Examples:
// splitAmount(100, 'good', 5) --> 24
// splitAmount(40, 'fair', 2) --> 23

const levelOfService3 = { good: 0.20, fair: 0.15, poor: 0.1 };

function splitAmount(billAmount, levelOfService3, numberOfGuests) {
    tipAmount = billAmount * levelOfService3;
    amountPerGuest = (billAmount + tipAmount) / numberOfGuests;
    return amountPerGuest;
}

console.log(splitAmount(100, levelOfService3['good'], 5));
console.log(splitAmount(40, levelOfService3['fair'], 2));
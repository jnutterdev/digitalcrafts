const levelOfService = { good: 0.20, fair: 0.15, poor: 0.1 };

function splitAmount(billAmount, levelOfService, numberOfGuests) {
    tipAmount = billAmount * levelOfService;
    amountPerGuest = (billAmount + tipAmount) / numberOfGuests;
    return amountPerGuest;
}

console.log(splitAmount(100, levelOfService['good'], 5));
console.log(splitAmount(40, levelOfService['fair'], 2));
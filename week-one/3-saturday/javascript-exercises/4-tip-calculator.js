const levelOfService = { good: 0.20, fair: 0.15, poor: 0.1 };

function tipAmount(billAmount, levelOfService) {
    tipCalculation = billAmount * levelOfService;
    return tipCalculation;
}

console.log(tipAmount(100, levelOfService['good']));
console.log(tipAmount(40, levelOfService['fair']));
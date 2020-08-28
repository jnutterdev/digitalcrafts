const levelOfService = { good: 0.20, fair: 0.15, poor: 0.1 };

function totalAmount(billAmount, levelOfService) {
    tipCalculation = billAmount * levelOfService;
    totalBill = billAmount + tipCalculation;
    return totalBill;
}

console.log(totalAmount(100, levelOfService['good']));
console.log(totalAmount(40, levelOfService['fair']));
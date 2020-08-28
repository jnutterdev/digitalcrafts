let object = {
    firstName: "John",
    lastName: "Nutter",
    fullName: function() {
        return `${this.firstName} ${this.lastName}!`;
    }
};

object.homeAddress = "Decatur, GA";


console.log(object.homeAddress)
console.log(object.fullName())
console.log(object)
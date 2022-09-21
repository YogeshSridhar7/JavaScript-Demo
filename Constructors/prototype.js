function Dog(name, age, weight){
    this.name=name;
    this.age=age;
    this.weight=weight;
}
let fido = new Dog("Fido", 23, "mixed");
Dog.prototype.sitting = false;
Dog.prototype.sit = function() {
if (this.sitting) {
	console.log(this.name + " is already sitting");
} else {
	this.sitting = true;
	console.log(this.name + " is now sitting");
}
};
fido.sit();
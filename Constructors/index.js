function Car(make, model, color) /*Parameters*/{
    this.make /*property*/ = make;
    this.model= model;
    this.color=color;
    this.drive = function(){
        console.log("driving");
    };
}
/* Property and parameter name should be same */

const car1 = new Car("nissan","skyline", "blue");
const car2 = new Car("nissan","skyline", "silver");

function Dog(name, age, weight){
    this.name=name;
    this.age=age;
    this.weight=weight;
}

let fido = new Dog("Fido", 23, "mixed");
fido.bark = function(){
    console.log("Fido is barking");
};
let spike = new Dog("Spike", 12, "mixed");
spike.bark();
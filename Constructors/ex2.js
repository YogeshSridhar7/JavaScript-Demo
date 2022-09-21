function showDog(name, weight, breed, handler){
    this.name = name;
    this.weight = weight;
    this.breed = breed;
    this. handler = handler;
}

showDog.prototype = new Dog();
showDog.prototype.stack = function(){
    console.log("stack");
};
showDog.prototype.bait = function(){
    console.log("bait");
};
showDog.prototype.gait = function(){
    console.log("gait");
};
showDog.prototype.groom = function(){
    console.log("groom");
};
const maggie = new showDog("Maggie", 22, "mixed", "Jack");
let car1 = {
    make: "Nissan",
    model: "Skyline",
    model_number: "R34"
};

// DESTRUCTURING ARRAYS

const cars=["Nissan", "Toyota", "Ford"];
const car2 ={ ...car1,...cars };
console.log(car2);
// const c1 = cars[0];
// const c2 = cars[1];
// const c3 = cars[2];
const [c1,c2,c3] = cars;
console.log(c1,car1);

// SPREADING OF ARRAYS

const trucks =["Mahindra","Bajaj","CAT"];
const vehicles = [...cars,...trucks];
console.log(vehicles);

// SPREAD ARRAY AND OBJECT 


let car3 =`${car1.make} is one of the most famous car companies.${car1.model} ${car1.model_number} is the fastest model.`;
console.log(car3);

function car4(make = "suzuki", model="alto"){
    const x =  `I drive a ${make} ${model} to work!`;
    return x;
}
console.log(car4("maruthi"));

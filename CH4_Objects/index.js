let car ={
car1 : {                //object literal syntax//
    make: "Nissan",
    model: "Skyline",
    color: "Steel",
    passengers: 2,
},
car2 : {
    make: "GM",
    model: "Caddillac",
    year:1985,
    color: "Tan",
    passengers: 5,
    convertible: false,
    mileage: 12892
},
car3 : {
    make: "Bajaj",
    model: "Rickshaw",
    year:1985,
    color: "Yellow",
    passengers: 3,
}
}
car.passengers=3;
if(car.passengers>4){
    console.log(car.car2);
} else if(car.passengers=3) {
    console.log(car.car3);
} else {
    console.log(car.car1);
}

// if (passengers>4){
//     console.log(car2);
// } else {
//     console.log(car);
// }
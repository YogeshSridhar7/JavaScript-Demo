function cars(name){
    let car1 = "Nissan Skyline";
}
cars();

let a;
let b= [1,2,3,,,,,,];
console.log(b[3]);
let car={
    make: "Nissan",
    model: "R33",

}

console.log(car.model);
console.log(car.year);

// NaN( Not a number), this will display when the output_ 
// _is not an integer, or doesn't have a defined value.
 let c ="food" * 1000;
 console.log(c);
 if(isNaN(c)){
    c=0;
 }
 console.log(c);

// Numbers can be compared with strings.
 if(99 == "99"){
    console.log(" Number equals string");
 } else {
    console.log("Number not equal to string");
 }

 "42"==42;
 "0"==0;
 "0"==false;
 "true"==true;
 true==(1=="1");

 console.log("result: "+ 10/2);
 let v = 3 + "bananas" + 2 + "apples";
 console.log(v);
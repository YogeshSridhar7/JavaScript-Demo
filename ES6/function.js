// let name = "John";

// function call(Name="Jim"){
//     console.log(Name);
//     return Name;
// }

// call("Jill");

// Assignment to a variable

let fly= function(){
    console.log("flying");
};

// Passed as an argument to a function
//  let arr = [1,2,3,4,5];
//  const newArr = arr.map(function (val) {
//     return val*2;
//  });
//  console.log(newArr);

// Returned from a function

let shapes = [
    { name:"circle", radius: 4},
    { name: "square", side: 4},
];

function calculateArea(shapes){
    for(let shape of shapes){
        let areaFn = getAreaFunction(shape);
        console.log(areaFn(shape));
    }
}

function getAreaFunction(shape){
    if(shape.name=="circle"){
        return function(shape){
            return 3.14 * shape.radius * shape.radius;
        };
    }
    if(shape.name=="square"){
        return function(shape){
            return shape.side * shape.side;
        };
    }
}

calculateArea(shapes);
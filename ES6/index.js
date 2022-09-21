let arr1 = [1,2,3,4,5,5];
let arr2 = [5,6,7,8];

let arr3 = [...arr1,...arr2];
console.log(arr3);

 let preson = {
    name: "Rae",
    age: 25,
 }
let job={
    role:"Streamer",
    since: 2014,
}

let twitch ={...preson,...job};
let state = `${preson.name} is a ${job.role} since ${job.since}`;
console.log(state);

// * Restructure * 
let a =["Rae","Rem","liza"];

// const elem1 = a[0];
// const elem2 = a[1];
// const elem3 = a[2];
const[elem1,elem2,elem3]=a;




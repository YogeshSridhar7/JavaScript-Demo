// const number = setInterval(()=>{console.log('tick')},1000)
// setTimeout(()=>{clearInterval(number)},10000)

 /* EXAMPLE 1 */
// let arr=[1,2,3,4,5];
// function power(arr){
// let Arr = [];
// for (var i = 0, len = arr.length; i < len; i++) {
//     Arr.push(arr[i] * arr[i]);
// }
// return Arr;
// }
// console.log(power(arr));

// let newArr = arr.map(power1);
// function power1(arr){
//   return arr*arr;
// }

// console.log(newArr);

// let arr1 = arr.map(function(arr){
//     return arr*arr;
//   });
// console.log(arr1);

// let arr2 = arr.map((value) => {return value*value});
// console.log(arr2);

/* EXAMPLE 2 */

let A=[1,3,45,66,78,99];
//  let a=[];
// for( let i=0; i<A.length; i++){
//     if(A[i]%2==0){
//        a.push(A[i]);
//     }
// }
// console.log(a);

let newA=A.filter((value)=> value%2==0);

console.log(newA);

/* EXAMPLE 3 */
let person={name:"Rahul",age:5,city:"Mumbai"};
 let{age:personage}=person;
 console.log(personage);
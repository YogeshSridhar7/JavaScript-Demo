// function handleClick(){
//     alert("A button is clicked!");
// }
// document.getElementById("btn").onclick = handleClick;

// document.getElementById("btn").onclick = function(){
//     alert("A button is clicked");
// };

// setTimeout(function(){
//     alert("After 2 seconds");
// },2000);

let count =0;
function counter(){
    count = count + 1;
    return count;
}

console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
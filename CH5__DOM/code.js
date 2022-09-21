let code9 = document.getElementById("code9");
// getting content
let code = code9.innerHTML;
//get an attribute
console.log(code9.getAttribute("id"));
//change content
code9.innerHTML = "Today is a rainy day";
//set an attribute
code9.setAttribute("class","red");  
setTimeout(function(){
    code9.setAttribute("class", "blue");
}, 2000);
setTimeout(function(){
    code9.removeAttribute("class");
}, 4000);

let code13 = document.getElementById("code13");
console.log(code13);

let code456 = document.getElementsByClassName("cod");
for (let i = 0; i < code456.length; i++) {
    code456[i].style.backgroundColor = "red";
  }


let elements = document.getElementsByTagName("p");
let text =elements.innerHTML;
for(let element of elements ){
element.setAttribute("class","red");
setTimeout(function(){
    element.setAttribute("class", "blue");
}, 3000);
setTimeout(function(){
    element.removeAttribute("class");
}, 5000);
}
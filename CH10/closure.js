function makeTimer(doneMessage, n){
    setTimeout(function(){
        alert(doneMessage);
    }, n);
}

makeTimer("hello closure",2000);

let count=0;
window.onload = function(){
    let button = document.getElementById("click me");
    button.onclick = function() {
        let message = "You clicked me";
        let div = document.getElementById("message");
        count++;
        div.innerHTML = message + count + "times!";
    };
};
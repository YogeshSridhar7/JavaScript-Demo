let myTime;
function resume(){
    myTime = setInterval(time,1000);
}

function time(){
    let d = new Date();
    let text = d.toLocaleTimeString();
    document.getElementById("Date").innerHTML = text;
}

function stop(){
    clearInterval(myTime);
}

time();
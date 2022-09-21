let migrating = true;
if(migrating){
    quack(4);
    fly(4);
}
let fly = function(num){ //Function Expression
    for( let i=0; i< num; i++){
        console.log("Flying.");
    }
};
function quack(num){       // Function Declaration
    for( let i=0; i< num; i++){
        console.log("Quack.");
    }
}

let products = ["Choo Choo Chocolate", "Icy-Mint", "Cake batter","Bubblegum"];
let hasBubbleGum = [false,false,false,true];
let i =0;

    while(i<hasBubbleGum.length){
        if(hasBubbleGum[i]){
            console.log(products[i] + " contains bubble gum");

        }
        i = i+1;
    }
    
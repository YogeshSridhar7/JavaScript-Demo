function bark(name,weight){
        if (weight>20){
            document.write(name + " WOOF WOOF<br>");
        } else {
            document.write(name + " woof woof<br>");
        }
}

    bark("Joe",-20);
    bark("Jack",50);
    bark("Jill",20);
    bark("John",30);
